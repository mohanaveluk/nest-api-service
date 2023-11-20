import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionsService } from "../services/options.service";
import { CreateOptionDto } from "../dto/create-option.dto";
import { TopicService } from "../topic.service";

@Controller('course/option')
export class  OptionController{

    constructor(
        private optionService: OptionsService,
        private topicService: TopicService,
    ){

    }

    @Post('')
    @UsePipes(ValidationPipe)
    async saveOptionToCourse(@Body() CreateOptionDto: CreateOptionDto){
        const topic = await this.topicService.getTopicId(CreateOptionDto.topicId)
        const options = await this.optionService.createOption(CreateOptionDto, topic);
        return {topic, CreateOptionDto, options};
    }

}