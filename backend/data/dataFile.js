import { EmployeeData } from "./employees.js";
import { StudentData } from "./students.js";
export const Datafile = (req, res) => {
    try {
        const param = req.params.type;
        switch (param) {
            case "employees":
                return res.send({ data: EmployeeData, success: true, message: "Employee Data" });
            case "students":
                return res.send({ data: StudentData, success: true, message: "Student Data" });
            default:
                return res.send({ data: "Invalid type", success: false, message: "Invalid type" });
        }

    } catch (error) {
        return res.send({ data: error, success: false, message: "Failed to run your code" });
    }



}