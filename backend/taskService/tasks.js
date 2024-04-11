import express from "express"

const taskRouter = express.Router()

// endpoings : /tasks -> [], addTask->add new task,

taskRouter.get("/tasks", tasksFn)
// add as may as we want ...
// post endpoint
// delelet endpoint
export { taskRouter } // export default taskRouter
