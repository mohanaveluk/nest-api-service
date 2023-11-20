import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CourseDto } from './dto/create-course.dto';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(
        private courseService: CourseService
    ){}

    @Get('/')
    getAllCourse(){
        return this.courseService.getAllCourse();
    }

    @Get('/:id')
    async getCourseById(@Param('id', ParseIntPipe) id: number ){
        return await this.courseService.getCourseById(id);
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async create (@Body() courseData: CourseDto): Promise<CourseDto>{
        return await this.courseService.createCourse(courseData);
    }
    
    @Post('/update')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async update(@Param() id: number, @Body() courseData: CourseDto){
        
    }
}
