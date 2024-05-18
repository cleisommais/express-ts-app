import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entities/User"

export const DbConn = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "dev",
    password: "123456",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

