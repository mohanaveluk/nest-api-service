import { IsNotEmpty } from "class-validator";

export interface Item{
    id: number;
    name: string;
    description: string;
    qty: number;
}