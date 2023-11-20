import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CourseDto } from './dto/create-course.dto';
import { Course } from 'src/database/course/course.entity';
import { relative } from 'path';

@Injectable()
export class CourseService {
    constructor(
        @Inject('COURSE_REPOSITORY')
        private courseRepository: Repository<Course>
    ){

    }

    async getAllCourse(){
        return await this.courseRepository.find({where: {}, relations: ['topic']});
    }

    async createCourse( courseobj: CourseDto): Promise<CourseDto>{
        return await this.courseRepository.save(courseobj);
    }

    async getCourseById(id: number): Promise<Course> {
        return await this.courseRepository.findOne({where: {id: id}, relations: ['topic']});
    }

    async getCourseId(id: number): Promise<Course> {
        return await this.courseRepository.findOneBy({id: id});
    }

    async update(id: number, courseobj: CourseDto): Promise<any>{
        return await this.courseRepository.update(id, courseobj);
    }
}
