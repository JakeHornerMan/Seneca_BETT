import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import testRoutes from './controllers/testRouter';
import courseRouter from './controllers/courseRouter';
import authRouter from './controllers/authRouter';
import sessionRouter from './controllers/SessionRouter';
import statsRouter from './controllers/StatsRouter';
import userStatsRouter from './controllers/userStatsRouter';
import { AppDataSource } from './repositorys/appDataSource';

export const app: express.Application = express();

const port = process.env.PORT || 3000;
const dbhost = process.env.DB_HOST || 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/test', testRoutes);
app.use('/course', courseRouter);
app.use('/auth', authRouter);
app.use('/session', sessionRouter);
app.use('/stats', statsRouter);
app.use('/stats/user', userStatsRouter);

AppDataSource.initialize()
    .then(() => {
        console.log(`Connected to DB host ${dbhost}`);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    });