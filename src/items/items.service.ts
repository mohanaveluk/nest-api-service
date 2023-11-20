import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ItemsService {

    constructor(
        @InjectModel('Item') private readonly itemModel: Model<Item>
    ){}

    private readonly items: Item[] = [
        {
            id: 123,
            name: 'Item 1',
            description: 'Detail of item 1',
            qty: 100
        },
        {
            id: 153,
            name: 'Item 2',
            description: 'Detail of item 2',
            qty: 460
        },
        {
            id: 233,
            name: 'Item 3',
            description: 'Detail of item 3',
            qty: 505
        },
    ];

    // findAll() : Item[]{
    //     return this.items;
    // }

    // findOne(id: number){
    //     return this.items.find(x => x.id == id);
    // }


    async findAll() : Promise<Item[]>{
        return await this.itemModel.find();
    }


    async findOne(id: number): Promise<Item>{
        return await this.itemModel.findOne({_id: id});
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id,item, {new: true});
    }
}
