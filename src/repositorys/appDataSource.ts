import { DataSource } from 'typeorm';
import express from 'express';
import { User } from '../models/User';
import { Course } from '../models/Course';
import { SessionStats } from '../models/SessionStats';
import { ModuleStats } from '../models/ModuleStats';

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 5432;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: host,
    port: Number(port),
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User, Course, SessionStats, ModuleStats],
    subscribers: [],
    migrations: [],
});