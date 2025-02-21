import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import test from './controllers/test';
import courseRouter from './controllers/courseRouter';
import authRouter from './controllers/authRouter';

const app: express.Application = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const testRoutes = test;
app.use('/test', testRoutes);
app.use('/course', courseRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});