import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Topic } from "./topic.entity";

@Entity('options')
export class Options extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    text: string;

    @Column({type: 'boolean'})
    isCorrect: boolean;

    @ManyToOne(() => Topic, (topic) => topic.options)
    topic: Topic
}