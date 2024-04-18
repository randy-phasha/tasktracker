import express from 'express';
import EmployeeData from './employeeData.js';

const employeeRouter = express.Router();

/***Functions***/
function getEmployees(req, res) {
   try {
      return res.json(EmployeeData);

   } catch (error) {
      res.status(500).json("Unable to get Opherlabs Employees: " + error.message)
   }
}

/***Routes ***/
employeeRouter.get('/employee', getEmployees)


/*****************************************************************************************/
export { employeeRouter };
