import { DataSource } from 'typeorm';
import express from 'express';
import { User } from '../models/User';
import { Course } from '../models/Course';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User, Course],
    subscribers: [],
    migrations: [],
});