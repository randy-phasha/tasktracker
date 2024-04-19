import express from 'express';
import { getEmployees } from './employeeFunctions.js';

const employeeRouter = express.Router();

/***Routes ***/
employeeRouter.get('/employee', getEmployees)


/*************************************************************************/
export { employeeRouter };
