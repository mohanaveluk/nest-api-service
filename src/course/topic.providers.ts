import { Topic } from "src/database/course/topic.entity";
import { DataSource } from "typeorm";

export const topicProviders = [
    {
        provide: "TOPIC_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Topic),
        inject: ['DATA_SOURCE']
        
    }
];