import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import test from './controllers/test';
import courseRouter from './controllers/courseRouter';
import authRouter from './controllers/authRouter';
import { AppDataSource } from './repositorys/appDataSource';
import { User } from './models/User';

const app: express.Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const testRoutes = test;
app.use('/test', testRoutes);
app.use('/course', courseRouter);
app.use('/auth', authRouter);

AppDataSource.initialize()
    .then(() => {
        console.log(`Connected to DB ${port}`);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            // const userRepository = AppDataSource.getRepository(User);
            // let user = new User();
            // user.username = 'admin';
            // user.email = 'test@test.com';
            // user.password = 'password';
            // user.role = 'admin';
            // user.createdAt = new Date();
            // userRepository.save(user);
        });
    });