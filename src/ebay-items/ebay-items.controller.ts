import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EbayItemsService } from './ebay-items.service';
import { log } from 'console';

@Controller('api/ebay-items')
export class EbayItemsController {

    constructor(private itemsService: EbayItemsService){}

    @Get("/getAllItems")
    getAll(){
        return this.itemsService.getAllItems()
    }
    // @Post("/search")
    // searchOne(@Body()search){
    //   return  this.itemsService.searchOne(search.text)
    // }
    @Get("/search")
    searchOne(@Query("text")text:string){
      console.log(text)
      return  this.itemsService.searchOne(text)
    } 
}
  