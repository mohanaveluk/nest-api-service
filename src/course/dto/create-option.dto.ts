import { IsNotEmpty, Length } from "class-validator";

export class CreateOptionDto {
    @IsNotEmpty()
    @Length(3,35)
    text: string;

    @IsNotEmpty()
    isCorrect: boolean

    @IsNotEmpty()
    topicId: number
}