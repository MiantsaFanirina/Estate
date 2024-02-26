import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service'

type OrderCreateInputWithoutAssociations = Omit<Prisma.OrderCreateInput, 'client' | 'orderedProducts'>;

@Injectable()
export class OrdersService {
  
  constructor(private readonly databaseService: DatabaseService) {}

 async create({clientData, orderData, orderedProducts}: {
    clientData: Prisma.ClientCreateInput
    orderData: OrderCreateInputWithoutAssociations
    orderedProducts: any
  }) {
    console.log(clientData, orderData, orderedProducts);
    const client = await this.databaseService.client.findUnique({where: {name: clientData.name}});
    
    // if the client don't exist
    if (!client) 
    {
      const createdClient = await this.databaseService.client.create({data: clientData});
      
      // create the Order
      const createdOrder = await this.databaseService.order.create({
        data: {
          ...orderData,
          client: {
            connect: {
              id: createdClient.id
            },
          }
        }
      });


      // create the the ordered product
      for (const orderedProduct of orderedProducts) {

        const currentProduct = await this.databaseService.product.findUnique({
          where: {id: orderedProduct.id}
        });

        const newAmount = currentProduct.amount - orderedProduct.quantity;

        await this.databaseService.product.update({
          where: {id: orderedProduct.id},
          data: {amount: newAmount}
        });

        await this.databaseService.orderedProduct.create({
          data: {
            amount: orderedProduct.quantity,
            order: {
              connect: {
                id: createdOrder.id
              }
            },
            product: {
              connect:  {
                id: orderedProduct.id
              }
            }
            
          }
        });
      }

      return await this.databaseService.order.findUnique({
        where: {id: createdOrder.id},
        include: {client: true, orderedProducts: true}
      });

    }

    else
    {
      // if the client exist
      const createdOrder = await this.databaseService.order.create({
        data: {
          ...orderData,
          client: {
            connect: {
              id: client.id
            }
          }
        }
      });

      for (const orderedProduct of orderedProducts) {
        const currentProduct = await this.databaseService.product.findUnique({
          where: {id: orderedProduct.id}
        });

        const newAmount = currentProduct.amount - orderedProduct.quantity;

        await this.databaseService.product.update({
          where: {id: orderedProduct.id},
          data: {amount: newAmount}
        });

        await this.databaseService.orderedProduct.create({
          data: {
            amount: orderedProduct.quantity,
            order: {
              connect: {
                id: createdOrder.id
              }
            },
            product: {
              connect:  {
                id: orderedProduct.id
              }
            }
          }
        });
      }

      return await this.databaseService.order.findUnique({
        where: {id: createdOrder.id},
        include: {client: true, orderedProducts: true}
      });

    }

    

  }


  findAll() {
    return this.databaseService.order.findMany({include: {client: true, orderedProducts: true}});
  }

  findOne(id: number) {
    return this.databaseService.order.findUnique({where: {id}, include: {client: true, orderedProducts: true}});
  }

  update(id: number, updateOrderDto: any) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
