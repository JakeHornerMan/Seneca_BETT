import express from 'express';

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    console.log("Hello world");
    res.send("Hello world");
});

router.post("/data", (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.sendStatus(200);
});
    
export default router;