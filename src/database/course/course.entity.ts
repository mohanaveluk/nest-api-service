import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Topic } from "./topic.entity";

@Entity()
export class Course extends BaseEntity{
    @PrimaryGeneratedColumn({comment: 'the course unique identifier', type: "int8"})
    id: number;

    @Column({type: "varchar"})
    name: string;

    @Column({type: "varchar"})
    type: string;

    @Column({type: "int"})
    cost: number;

    @Column({type: "text", nullable: true})
    comments: string;
    
    @OneToMany(() => Topic, (topic) => topic.course)
    topic: Topic[]
}

