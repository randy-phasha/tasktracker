import { EmployeeData } from "./employees.js";
import { opherlabsEmployees } from "./opherlabsEmployees.js"
import { StudentData } from "./students.js";

export const Datafile = (req, res) => {
    try {
        const param = req.params.type;
        switch (param) {
            case "employees":
                return res.send({ data: EmployeeData, success: true, message: "Employee Data" });

            case "opherlabsEmployees":
                try {
                    return res.json({ data: opherlabsEmployees, success: true, message: "Employee Data" });
                }
                catch (error) {
                    return res.json({ success: false, message: "Unable to return opherlabsEmployees - " + error })
                }

            case "students":
                try {
                    if (StudentData.length < 45) {
                        return res.status(500).json({ success: false, message: "Insufficient number of students returned." });
                    }
                    return res.status(200).json({ data: StudentData, success: true, message: "Student Data" });
                }
                catch (error) {
                    return res.status(500).json({ success: false, message: "Unable to return students - " + error })
                }

            default:
                return res.json({ data: "Invalid type", success: false, message: "Invalid type" });
        }

    } catch (error) {
        return res.send({ data: error, success: false, message: "Failed to run your code" });
    }
}
