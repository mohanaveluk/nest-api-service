import { IsNotEmpty, Length } from "class-validator";

export class CreateItemDto{
    readonly id: Number;
    @IsNotEmpty({message: 'Name is required'})
    @Length(2, 10)
    readonly name: string;
    readonly description: string;
    readonly qty: number;
}