import { Body, Controller, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.model';


@Controller('items')
export class ItemsController {
    item: Item;
    constructor(
        private itemsService: ItemsService
    ){

    }

    @Get('findAll')
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number ): Promise<Item>{
        return this.itemsService.findOne(id);
    }

    @Put(':id')
    update(@Body() createItem: CreateItemDto, @Param('id') id: string ): Promise<Item>{
        this.item = createItem as Item;
        return this.itemsService.update(id, this.item);
    }


    @Post('send')
    sendMessage(@Body() item: CreateItemDto): string{
        console.log(item);
        return `Message has been sent for ${item.description}`;
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async create(@Body() createItem: CreateItemDto): Promise<Item>{
        this.item = createItem as Item;
        return await this.itemsService.create(this.item);
    }
}
