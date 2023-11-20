import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Topic } from 'src/database/course/topic.entity';
import { TopicDto } from './dto/create-topic.dto';
import { Course } from 'src/database/course/course.entity';
import { CourseDto } from './dto/create-course.dto';

@Injectable()
export class TopicService {
    constructor(
        @Inject('TOPIC_REPOSITORY')
        private topicRepository: Repository<Topic>,
    ){

    }

    async createTopic( topicobj: TopicDto, course: Course): Promise<Topic>{
        const newTopic = await this.topicRepository.save({topic: topicobj.topic, is_active: topicobj.is_active});
        course.topic = [newTopic];
        await course.save();
        return newTopic;
    }

    async getTopicId(id: number): Promise<Topic> {
        return await this.topicRepository.findOne({where: {id: id}, relations: ['options']});
    }
}
