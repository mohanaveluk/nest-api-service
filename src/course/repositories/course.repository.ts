import { Course } from "src/database/course/course.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Course)
export class courseRepository extends Repository<Course>{

}