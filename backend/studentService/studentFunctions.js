import StudentData from "./studentData.js";

function getStudents(req, res) {
   try {
      if (StudentData.length < 45) {
         return res.status(500).json("Unable to load students: Insufficient number of students returned.");
      }

      res.status(200).json(StudentData);
   }
   catch (error) {
      res.status(500).json("Unable to load students - " + error.message)
   }
}

function getCountByProvince(req, res) {
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
}

/*************************************************************************/
export { getStudents }
export { getCountByProvince }