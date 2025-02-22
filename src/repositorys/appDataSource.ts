import { DataSource } from 'typeorm';
import express from 'express';
import { User } from '../models/User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

const userRepository = AppDataSource.getRepository(User);

export const storeUser = (newUser: User) => {
    // const userRepository = AppDataSource.getRepository(User);
    let user = newUser;
    userRepository.save(user);
}

// async export const doesUserExist = (username: string, email): bool => {
    
// }