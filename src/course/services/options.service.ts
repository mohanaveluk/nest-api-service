import { Inject, Injectable } from "@nestjs/common";
import { Options } from "src/database/course/options.entity";
import { Repository } from "typeorm";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Topic } from "src/database/course/topic.entity";

@Injectable()
export class OptionsService{
    constructor(
        @Inject('OPTION_REPOSITORY')
        private optionRepository: Repository<Options>
    ){}

    async createOption(options: CreateOptionDto, topic: Topic){
        const newOption = await this.optionRepository.save({
            text: options.text,
            isCorrect: options.isCorrect
        });
        topic.options = [...topic.options, newOption];
        await topic.save();
        return newOption; 
    }
    
}