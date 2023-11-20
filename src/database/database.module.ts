import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { courseRepository } from 'src/course/repositories/course.repository';
import { databaseProviders } from 'src/database/database.providers';

@Module({
    //imports: [TypeOrmModule.forFeature([courseRepository])],
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {}
