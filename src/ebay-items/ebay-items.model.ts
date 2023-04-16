import { Table,Model, Column, DataType } from "sequelize-typescript";



interface IItemCreationAttr{
    title:string,
    info:string,
    manufacturedLink:string
}


@Table({tableName:"ebay-items",timestamps:false})

export default class EbayItems extends Model<EbayItems,IItemCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number

    @Column({type:DataType.STRING})
    title: string
 

    @Column({type:DataType.STRING})
    info: string

    @Column({type:DataType.STRING})
    manufacturedLink: string

}
