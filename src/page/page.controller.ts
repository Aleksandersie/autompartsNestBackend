import { Controller, Get, Query } from '@nestjs/common';

@Controller('api/page')
export class PageController {

    @Get("/getPageText")
    getPageText(@Query("currentLanguage")currentLanguage:string)
    {
        console.log(currentLanguage)
        if (currentLanguage === "EN"){
          return {text:"text is en"}
        }
         if (currentLanguage === "DE"){
          return {text:"text is de"}
        }
    }
  
}
