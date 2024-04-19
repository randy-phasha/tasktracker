import EmployeeData from "./employeeData.js";

function getEmployees(req, res) {
   try {
      return res.json(EmployeeData);

   } catch (error) {
      res.status(500).json("Unable to get Opherlabs Employees: " + error.message)
   }
}

/*************************************************************************/
export { getEmployees };