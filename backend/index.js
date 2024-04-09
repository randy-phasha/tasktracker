import express from 'express';
import { Datafile } from './data/dataFile.js';

// 1. REST API
const app = express();
// adding a method or endpoint requires the following:
// endpoint(route) name : string
// callback method : function  -> two params (reciceing:tre, sending data:res)
app.get('/', (req, res) => { res.send({ message: "Hello, World!", data: [1, 2, 3, 4, 5] }); })
app.get("/names", (req, res) => { res.send({ message: "Hello, World!", data: ["John", "Jane", "Joe", "Jill"] }); })
app.get("/data/:type", Datafile) // /data/employees, /data/students
app.patch('/data', (a,b)=>{
    // a= {headers, body}
    // const headers = a.headers

    const name = "Clynton Phasha Chanza"
    const [firstName,middleName,lastName] = name.split(" ")
    // const body = a.body
    const {headers,body}= a
    // object|array desctructuring
})
// End of app initialization
app.listen(6700, () => {
    console.log(`Server listening on port http://localhost:6700`);
})
// GET, POST, PUT, PATCH, DELETE : HTTP methods
// use 


// GraphqL API (POST) // uses only one endpoint
