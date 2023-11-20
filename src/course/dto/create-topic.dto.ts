import { IsInt, IsNotEmpty, IsPositive, Length, Min } from "class-validator";
import { isNumber } from "util";

export class TopicDto{

    id: number;

    @IsNotEmpty({message: 'Name is required'})
    @Length(2, 100)
    topic: string;
    
    @IsNotEmpty({message: 'Active status required'})
    is_active: boolean;

    @IsNotEmpty({message: 'Course id is required'})
    @IsPositive({message: 'Course Id should be positive number'})
    @IsInt()
    @Min(1)
    courseId: number;
}