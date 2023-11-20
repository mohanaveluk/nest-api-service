import { Course } from "src/database/course/course.entity";
import { DataSource } from "typeorm";


export const CourseProviders = [
    {
        provide: 'COURSE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
        inject: ['DATA_SOURCE'],
    }
];