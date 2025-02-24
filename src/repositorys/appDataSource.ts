import { DataSource } from 'typeorm';
import express from 'express';
import { User } from '../models/User';
import { Course } from '../models/Course';
import { SessionStats } from '../models/SessionStats';
import { ModuleStats } from '../models/ModuleStats';

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 5432;
const username = process.env.DB_USERNAME || "postgres";
const password = process.env.DB_PASSWORD || "password";
const database = process.env.DB_DATABASE || "postgres";
const logging = process.env.DB_LOGGING || false;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: host,
    port: Number(port),
    username: username,
    password: password,
    database: database,
    synchronize: true,
    logging: false,
    entities: [User, Course, SessionStats, ModuleStats],
    subscribers: [],
    migrations: [],
    // extra: {
    //     ssl: {
    //         rejectUnauthorized: false, // Bypass certificate validation
    //     },
    // },
});