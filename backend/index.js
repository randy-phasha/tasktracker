import express from 'express';
import { Datafile } from './data/dataFile.js';
import dotenv from 'dotenv'
import { StudentData } from './data/students.js';
import { taskRouter } from './taskService/index.js';
import { studentRouter } from './studentService/index.js';
import { employeeRouter } from './employeeService/index.js'

dotenv.config()

const env = process.env
const app = express();
const localDb = []

app.use(express.json())
// adding a method or endpoint requires the following:
// endpoint(route) name : string
// callback method : function  -> two params (reciceing:tre, sending data:res)

/************************ End Points ************************/
app.get('/', (req, res) => {
    res.send({
        message: "Hello, World!",
        data: [1, 2, 3, 4, 5]
    });
})

app.get("/names", (req, res) => {
    res.send({
        message: "Hello, World!",
        data: ["John", "Jane", "Joe", "Jill"]
    });
})

app.get("/data/:type", Datafile) // /data/employees, /data/students

/*
app.get("/students", (req, res) => {
    try {
        if (StudentData.length < 45) {
            return res.status(500).json("Insufficient number of students returned");
        }

        res.status(200).json(StudentData);
    }
    catch (error) {
        res.status(500).json("Unable to load students: " + error.message)
    }
})
*/

/*
app.get("/provinceCount", (req, res) => {
    //const provinces = [];
    //StudentData.forEach((student) => {
    //    if(!provinces.includes(student.province)) {
    //        provinces.push(student.province);
    //    }
    //})
    //res.json({provinces});

    try {
        const provinceCount = {};
        StudentData.forEach(student => {
            if (provinceCount.hasOwnProperty(student.province)) {
                provinceCount[student.province]++;
            } else {
                provinceCount[student.province] = 1;
            }
        });

        res.status(200).json({ provinceCount });
    }
    catch (error) {
        res.status(500).json("Unable to count students by province: " + error.message)
    }
});
*/

/*
app.get('/opherlabsEmployee', (req, res) => {
    try {
        res.status(200).send(opherlabsEmployees);
    } catch (error) {
        res.status(500).json("Unable to get Opherlabs Employees: " + error.message)
    }
})
*/

app.patch('/data', (a, b) => {
    const { body } = a
    console.log(body)
    return b.send({ fulName: body.firstName + " " + body.lastName, message: "Recived data", success: true })
})

app.post("/postdata", (requestdata, responsedata) => {
    const { body: bodyData } = requestdata
    try {
        localDb.push(bodyData)
        return responsedata.send({ message: "Recived data", success: true, data: localDb })
    } catch (error) {
        return responsedata.status(500).send({ message: "Data not Recived", success: false })
    }
})

console.log(env.API_PORT)

// GET, POST, PUT, PATCH, DELETE : HTTP methods
// use
app.use(taskRouter)
app.use(studentRouter)
app.use(employeeRouter)

/******************End of app initialization******************/
app.listen(env.API_PORT ?? 6700, () => {
    console.log(`Server listening on port http://localhost:${env.API_PORT ?? 6700}`);
})
