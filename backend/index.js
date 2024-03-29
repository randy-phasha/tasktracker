import express from 'express';
import { Datafile } from './data/dataFile.js';
const app = express();
app.get('/', (req, res) => { res.send({ message: "Hello, World!", data: [1, 2, 3, 4, 5] }); })
app.get("/names", (req, res) => { res.send({ message: "Hello, World!", data: ["John", "Jane", "Joe", "Jill"] }); })
app.get("/data/:type", Datafile) // /data/employees, /data/students
// End of app initialization
app.listen(6700, () => {
    console.log(`Server listening on port http://localhost:6700`);
})
// GET, POST, PUT, PATCH, DELETE
