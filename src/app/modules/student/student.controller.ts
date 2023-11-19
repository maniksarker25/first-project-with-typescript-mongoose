import { Request, Response } from 'express';
import { StudentServices } from './student.services';
import studentValidationSchema from './student.validation';
// import studentJoiValidationSchema from './student.joiValidation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    // student data validation using joi ---------------------------
    /*  const { error, value } = studentJoiValidationSchema.validate(student);

    if (error) {
      return res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.details,
      });
    }
    const result = await StudentServices.createStudentIntoDB(value); */

    // student data validation using zod-------------------------------
    const zodValidationData = studentValidationSchema.parse(student);

    const result = await StudentServices.createStudentIntoDB(zodValidationData);
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res
      .status(500)
      .json({ success: false, message: 'something went wrong', error: error });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'students are retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'something went wrong' });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
