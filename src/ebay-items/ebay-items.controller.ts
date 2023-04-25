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
   
    @Get("/search")
    searchOne(@Query("text")text:string){
      console.log(text)
      return  this.itemsService.searchOne(text)
    } 
     @Get("/pageText")
    getText(@Query("currentLanguage")currentLanguage:string){
      console.log(currentLanguage)
      if (currentLanguage === "EN"){
        return {text:"text is en"}
      }
       if (currentLanguage === "DE"){
        return {text:"text is de"}
      }

    } 

}
  