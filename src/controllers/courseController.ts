import express from 'express';
import { Course } from '../models/models';

const router = express.Router();

router.get("/getById", (req: express.Request, res: express.Response) => {
    console.log(`Getting course by Id ${req.query.id}`);
    const course: Course = {
        courseId: Number(req.query.id) || 1,
        courseTitle: "Introduction to Programming",
        qualification: "Beginner Level Certification",
        modules: ["Variables", "Loops", "Functions", "Objects"],
    };
    res.json(course);
});

router.post("", (req: express.Request, res: express.Response) => {
    console.log("Received Course:", req.body);
    const { courseId, courseTitle, qualification, modules } = req.body;
    const course: Course = {
        courseId,
        courseTitle,
        qualification,
        modules,
    };
    res.status(201).json(course);
});
    
export default router;