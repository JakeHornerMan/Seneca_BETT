import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import test from './controllers/test';
import courseRouter from './controllers/courseRouter';
import authRouter from './controllers/authRouter';
import { AppDataSource } from './repositorys/appDataSource';

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
        });
    });