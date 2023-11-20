import { IsNotEmpty, Length } from "class-validator";

export class CourseDto{

    id: number;

    @IsNotEmpty({message: 'Name is required'})
    @Length(2, 100)
    name: string;

    @IsNotEmpty({message: 'Type is required'})
    @Length(2, 20)
    type: string;

    @IsNotEmpty({message: 'Cost is required'})
    cost: number;

    comments: string;
}