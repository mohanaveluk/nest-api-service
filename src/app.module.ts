import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import config from './config/keys';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, ItemsModule, MongooseModule.forRoot(config.mongoUrl), CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
