import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// this routers will call controller --------
router.post('/create-student', StudentControllers.createStudent);

export const StudentRoutes = router;
