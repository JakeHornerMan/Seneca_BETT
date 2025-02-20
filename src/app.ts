import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
    console.log("Hello world");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});