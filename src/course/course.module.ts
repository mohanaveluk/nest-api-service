import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CourseProviders } from './course.providers';
import { courseRepository } from './repositories/course.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicController } from './topic.controller';
import { TopicService } from './topic.service';
import { topicProviders } from './topic.providers';
import { optionProviders } from './providers/option.providers';
import { OptionController } from './controller/options.controler';
import { OptionsService } from './services/options.service';

@Module({
  imports: [DatabaseModule],
  providers: [...CourseProviders, CourseService, ...topicProviders, TopicService, ...optionProviders, OptionsService],
  controllers: [CourseController, TopicController, OptionController],
})
export class CourseModule {}
