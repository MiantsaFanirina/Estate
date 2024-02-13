import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {


  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: Prisma.ProductCreateInput) {
    const createdProduct = await this.databaseService.product.create({ data: createProductDto });
    
    if(!createdProduct) {
      return {error: 'Product not created'};
    }
    return createdProduct;

  }

  async findAll() {
    const products = await this.databaseService.product.findMany({});
    return products;
  }

  async findOne(id: number) {
    const singleProduct = await this.databaseService.product.findUnique({where: {id}});
    if(!singleProduct) 
    {
      return {error: 'Product not found'};
    }
    return singleProduct;
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    const updatedProduct = await this.databaseService.product.update({where: {id}, data: updateProductDto});
    if(!updatedProduct) 
    {
      return {error: 'Product not updated'};
    }
    return updatedProduct;
  }

  async remove(id: number) {
    await this.databaseService.product.delete({where: {id}});
    return {message: `Product with id:${id} was deleted`};
  }
}
