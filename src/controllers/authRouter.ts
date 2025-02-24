import express, {Request, Response} from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import { User } from '../models/User';
import { AppDataSource } from '../repositorys/appDataSource';

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);
  
router.post('/register', async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }

    const existingUser = await userRepository.findOne({ where: [{ username }, { email }] });
    if (existingUser) {
        res.status(400).json({ message: 'Username or email already in use' });
        return;
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
        username,
        email,
        password: hashedPassword,
        role,
    });

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