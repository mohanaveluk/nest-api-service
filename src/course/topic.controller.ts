import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TopicDto } from "./dto/create-topic.dto";
import { TopicService } from "./topic.service";
import { CourseService } from "./course.service";

@Controller('topic')

export class TopicController{

    constructor(
        private topicService: TopicService,
        private courseService: CourseService
    ){}
    
    
    @Post('create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async saveTopic(@Body() topic: TopicDto){
        const courseObj = await this.courseService.getCourseId(topic.courseId)

        return await this.topicService.createTopic(topic, courseObj);
    }
}