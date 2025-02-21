import { DataSource } from 'typeorm';
import express from 'express';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});