import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import EbayItems from './ebay-items.model';
import { Op } from 'sequelize';


@Injectable()
export class EbayItemsService {

    constructor(@InjectModel(EbayItems) private ebayItemsRepository: typeof EbayItems){}

    async getAllItems(){
        return await this.ebayItemsRepository.findAll()
    }
    async searchOne(search){
        if(search===''){
            console.log("em")
            return []
        }
        return await this.ebayItemsRepository.findAll({
            where:{
                title:{ [Op.iLike]: "%" + search + "%" }  
            }
        })
    }
}
