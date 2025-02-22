import { DataSource } from 'typeorm';
import express from 'express';
import { User } from '../models/User';
import { Course } from '../models/Course';
import { SessionStats } from '../models/SessionStats';
import { ModuleStats } from '../models/ModuleStats';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User, Course, SessionStats, ModuleStats],
    subscribers: [],
    migrations: [],
});