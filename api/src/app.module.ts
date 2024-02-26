import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [DatabaseModule, UsersModule, ProductsModule, OrdersModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
