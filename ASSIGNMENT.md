#  version 001

Using the lessons learned and the backend application initialized in this project, implement the following endpoints for the API:

1. **Students Endpoint**: Returns a list of students in South Africa. The endpoint should return a minimum of 45 students. Here is the structure of a student model:
   ```js
   {
       name: string,
       age: string,
       email: string,
       grade: string,
       province: string
   }
   ```

2. **Calculate Median Age Endpoint**: Calculates the median age for a group of students in a province.

3. **Students Count by Province Endpoint**: Returns an object containing the number of students grouped by province.
4. **Opherlabs Employee List**: given all employees at OpherLabs, you are required to created an endpoint in the server that returns the following data

```js
{
    name: string
    department: string
    email: string
    reportsTo: string
    tasks: Array
}
```
> hint: you are supposed to get the list of all employees.

**OpherLabs Employee task tracker**: Create an endpoint to record tasks by the employees in question 4.
> hint: you are supposed to come up with model for the tasks.


# ‼️ IMPORTANT 🪤
Please make sure that you learn on how to work on these tasks without using AI. mastering the skills is far more important than getting points for a job well done by AI ⛔️

# Assignment 2

Based on what wehave covered this week please work on the following

1. Clean up teh main server file `index.js` to have all implementation in separate files
2. Create endpoint routes which are clean and with no `inline ` implementations but using external functions to group all functionalities
3. Add the following endpoints to `taskService`
   a. Adding new tasks
   b. deleteing tasks
   c. getting all tasks

>Please note that you will be graded based on the aproach you take to complete these tasks.