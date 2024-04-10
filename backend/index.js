import express from 'express';
import { Datafile } from './data/dataFile.js';
import dotenv from 'dotenv'
// bodyParse
dotenv.config()
const env = process.env
// 1. REST API
const app = express();
const localDb = []
app.use(express.json())
// adding a method or endpoint requires the following:
// endpoint(route) name : string
// callback method : function  -> two params (reciceing:tre, sending data:res)
app.get('/', (req, res) => { res.send({ message: "Hello, World!", data: [1, 2, 3, 4, 5] }); })
app.get("/names", (req, res) => { res.send({ message: "Hello, World!", data: ["John", "Jane", "Joe", "Jill"] }); })
app.get("/data/:type", Datafile) // /data/employees, /data/students
app.patch('/data', (a, b) => {
    const { body } = a
    console.log(body)
    return b.send({ fulName: body.firstName + " " + body.lastName, message: "Recived data", success: true })
})
app.post("/postdata", (requestdata, responsedata) => {
    const { body:bodyData } = requestdata
    try {
        localDb.push(bodyData)
        return responsedata.send({ message: "Recived data", success: true, data: localDb })
    } catch (error) {
        return responsedata.status(500).send({ message: "Data not Recived", success: false })
    }
})
console.log(env.API_PORT)
// End of app initialization
app.listen(env.API_PORT ?? 6700, () => {
    console.log(`Server listening on port http://localhost:${env.API_PORT ?? 6700}`);
})
// GET, POST, PUT, PATCH, DELETE : HTTP methods
// use 


// GraphqL API (POST) // uses only one endpoint
