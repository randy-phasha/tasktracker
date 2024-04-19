import express from 'express';
import { getStudents, getCountByProvince } from './studentFunctions.js';

const studentRouter = express.Router();

/***Routes ***/
studentRouter.get("/students", getStudents)
studentRouter.get("/students/provinceCount", getCountByProvince)


/*************************************************************************/
export { studentRouter };
