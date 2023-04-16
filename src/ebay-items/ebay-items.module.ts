import { Module } from '@nestjs/common';
import { EbayItemsController } from './ebay-items.controller';
import { EbayItemsService } from './ebay-items.service';
import EbayItems from './ebay-items.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [EbayItemsController],
  providers: [EbayItemsService],
  imports:[SequelizeModule.forFeature([EbayItems])]
})
export class EbayItemsModule {}
 