import { Sequelize } from "sequelize-typescript";

interface Idb {
    [index: string]: any;
}

export const db: Idb = {
    dev: {
        database: "gutsy_development_t",
        dialect: "postgres",
        host: "127.0.0.1",
        operatorsAliases: Sequelize.Op as any,
        password: null as any,
        port: 5432,
        username: "postgres",
    },
    prod: {
        database: "gutsy_development_t",
        dialect: "postgres",
        host: "127.0.0.1",
        operatorsAliases: Sequelize.Op as any,
        password: null as any,
        port: 5432,
        username: "postgres",
    },
    test: {
        database: "gutsy_development_t",
        dialect: "postgres",
        host: "127.0.0.1",
        operatorsAliases: Sequelize.Op as any,
        password: null as any,
        port: 5432,
        username: "postgres",
    },
};
