import express, { Request, Response } from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { Course } from '../models/Course';
import { authorizeRole } from '../middlewares/roleMiddleware';
import { AppDataSource } from '../repositorys/appDataSource';

const router = express.Router();

const courseRepository = AppDataSource.getRepository(Course);

export const GetCourse = async (courseIdentifier: string): Promise<Course | null> => {
    let course;
    // Try to find course by ID (if courseIdentifier is a number)
    if (courseIdentifier) {
        course = await courseRepository.findOne({ where: { id: courseIdentifier } });
    }
    
    // If no course is found, return 404
    if (!course) {
        return null;
    }

    // Return the course details
    return course;
}

router.get('/:courseIdentifier', async (req: Request, res: Response) => {
    const { courseIdentifier } = req.params; // Retrieve the courseTitle from the URL params

    try {

        let course;

        if(courseIdentifier){
            course = await courseRepository.findOne({ where: { id: courseIdentifier } });
        }
        
        // If no course is found, return 404
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }

        // Return the course details
        res.status(200).json(course);
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post("/create", authenticateJWT, authorizeRole('admin'), async(req: Request, res: Response) => {
    console.log("Received Course:", req.body);
    const { courseTitle, qualification, topicsAndModules } = req.body;
    try {
        const newCourse = courseRepository.create({
            courseTitle,
            qualification,
            topicsAndModules
        });

        await courseRepository.save(newCourse);

        res.status(201).json({ message: 'Course created successfully', newCourse });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:courseIdentifier', authenticateJWT, authorizeRole('admin'), async (req: Request, res: Response) => {
    const { courseIdentifier } = req.params;  
    const { courseTitle, qualification, topicsAndModules } = req.body; 

    try {
        let course;

        if (!isNaN(Number(courseIdentifier))) {
            course = await courseRepository.findOne({ where: { id: courseIdentifier } });
        }

        if (!course) {
            course = await courseRepository.findOne({ where: { courseTitle: courseIdentifier } });
        }

        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }

        if (courseTitle) course.courseTitle = courseTitle;
        if (qualification) course.qualification = qualification;
        if (topicsAndModules) course.topicsAndModules = topicsAndModules;

        await courseRepository.save(course);

        res.status(200).json(course);

    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Internal server error' });
        return;
    }
});
    
export default router;