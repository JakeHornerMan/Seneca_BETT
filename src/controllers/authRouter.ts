import express, {Request, Response} from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import { User } from '../models/User';
import { AppDataSource } from '../repositorys/appDataSource';

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);
  
// User registration route
router.post('/register', async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;

    // Validate input
    if (!username || !email || !password || !role) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }

    // Check if username or email is already taken
    const existingUser = await userRepository.findOne({ where: [{ username }, { email }] });
    if (existingUser) {
        res.status(400).json({ message: 'Username or email already in use' });
        return;
    }
    

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = userRepository.create({
        username,
        email,
        password: hashedPassword,
        role,
    });

    // Save the new user to db
    await userRepository.save(newUser);

    res.status(201).json({ message: 'User registered successfully' });

    console.log(
        `User successfully registered: ${JSON.stringify(newUser, null, 2)}`,
    );
});

// User login route
router.post('/login', async (req: Request, res: Response) => {
const { username, password } = req.body;
    const user = await userRepository.findOne({ where: { username } });

    if (!user) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
    }

    const token = generateToken({
        id: user.id,
        role: user.role,
    });
    res.json({ token });
});

export default router;