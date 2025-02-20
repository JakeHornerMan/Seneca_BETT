import express from 'express';
import test from './controllers/test';
import courseController from './controllers/courseController';

const app: express.Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const testRoutes = test;
app.use('/test', testRoutes);
app.use('/course', courseController);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});