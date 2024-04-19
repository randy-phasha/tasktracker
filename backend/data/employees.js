export const EmployeeData = [2,4, 6, "Mitch", "Clynton", { name: "Clynton" }, [1, 2]] // length, pop, push, shift, map, filter
const length = EmployeeData.length // 4
// get the last item
const lastItem = EmployeeData[length - 1] // "Clynton"
EmployeeData.pop() // remove the last item
EmployeeData.shift() // remove the first item
//console.log(EmployeeData) // [2, 4, 6, "Mitch"]
EmployeeData.push("Benon") // add a new item


// let, {var},  const
// let mutatable
// const immutable

const mappedData = EmployeeData.map(student => {
    if (typeof student === "string") {
        return student
    }
})
const fiteredData = EmployeeData.filter(student => typeof student === "number")
//console.log(mappedData) // ["Mitch", "Benon"]

export const EmployeeDataObject = {
    name: "Mitch",
    age: 67,
    nationality: "South Africa"
} // keys, values, entries, 

const keys = Object.keys(EmployeeDataObject) // ["name", "age", "nationality"]
const values = Object.values(EmployeeDataObject) // ["Mitch", 67, "South Africa"]
const entries = Object.entries(EmployeeDataObject) // [["name", "Mitch"], ["age", 67], ["nationality", "South Africa"]]

// loops map, foreEach, filter, for

//v1
for(let i = 0; i < EmployeeData.length; i++) {
    //console.log(EmployeeData[i])
}

//v2
for(let i in EmployeeData) {
    //console.log(EmployeeData[i])
}

// v3
for(let t of EmployeeData) {    
    //console.log(t)
}
