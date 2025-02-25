import express from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { authorizeRole } from '../middlewares/roleMiddleware';

const router = express.Router();

router.get("/", authenticateJWT,(req: express.Request, res: express.Response) => {
    console.log("Hello world");
    res.send("Hello world");
});

router.post("/data", authenticateJWT,  (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.sendStatus(200);
});

router.get("/user", authenticateJWT, authorizeRole('user'),  (req: express.Request, res: express.Response) => {
    res.send("User Functionality").sendStatus(200);
});

router.get("/admin", authenticateJWT, authorizeRole('admin'),  (req: express.Request, res: express.Response) => {
    res.send("Admin Functionality").sendStatus(200);
});
    
export default router;