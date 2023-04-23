import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { EbayItemsModule } from './ebay-items/ebay-items.module';
import EbayItems from './ebay-items/ebay-items.model';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "91.201.55.182",
      port: 5432,
      username: "test",
      password: "1234",
      database: "automparts",
      autoLoadModels: true,
      models: [EbayItems],
    }),
    ConfigModule.forRoot(),
    EbayItemsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
