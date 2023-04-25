import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { EbayItemsModule } from './ebay-items/ebay-items.module';
import EbayItems from './ebay-items/ebay-items.model';
import { ConfigModule } from '@nestjs/config';
import { PageService } from './page/page.service';
import { PageController } from './page/page.controller';
import { PageModule } from './page/page.module';


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
    EbayItemsModule,
    PageModule
  ],
  controllers: [PageController],
  providers: [PageService],
})
export class AppModule {}
