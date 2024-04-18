import express from "express"

const taskRouter = express.Router()

// endpoints : /tasks -> [], addTask->add new task,

taskRouter.get("/tasks", (req,res) => {
   res.json({message: "Hello tasks"})
})

// add as may as we want ...
// post endpoint
// delelet endpoint
export { taskRouter } // export default taskRouter
