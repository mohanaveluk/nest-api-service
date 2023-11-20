import { Length } from "class-validator";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";
import { Options } from "./options.entity";

@Entity('topics')
export class Topic extends BaseEntity{
    @PrimaryGeneratedColumn({comment: 'the topic unique identifier', type: "int8"})
    id: number;

    @Column({comment: 'to store the name of the topic', type: "varchar"})
    @Length(2, 10)
    topic: string;
    
    
    @Column({comment: 'to store the status of the topic'})
    is_active: boolean;

    @ManyToOne(() => Course, (course) => course.topic)
    course: Course;

    @OneToMany(() => Options, (options) => options.topic)
    options: Options[]

}