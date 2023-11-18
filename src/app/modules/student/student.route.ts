import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// this routers will call controller --------
router.post('/create-student', StudentControllers.createStudent);
router.get('/all-students', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
