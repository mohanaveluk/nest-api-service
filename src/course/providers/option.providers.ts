import { Options } from "src/database/course/options.entity";
import { DataSource } from "typeorm";

export const optionProviders = [
    {
        provide: 'OPTION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Options),
        inject: ['DATA_SOURCE']
    }
];