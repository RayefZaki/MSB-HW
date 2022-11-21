import expres from "express";
import validate from "../middleWare/validate";
import { StudentSchema, StudentType } from "../zod-schema/StudentSchema";

export const StudentGPARouter = expres();

let Studentmanag: StudentType[] = [];
Studentmanag.push({
  id: "001",
  name: "Rayef",
  major: "IT",
  level: 2,
  GPA: 4.45,
});

  StudentGPARouter.get('/:major',(req,res)=>{
    const {major}=req.params;
    let z = major.toLowerCase() || major.toLowerCase() 
    Studentmanag.filter((search)=>{
    return  search.major.toLowerCase()===z || search.major.toUpperCase()===z? res.json(search) : "Not Found"
    })
   })

StudentGPARouter.get(`/`, (req, res) => {
  return res.json(Studentmanag);
});

StudentGPARouter.post(`/`, validate(StudentSchema), (req, res) => {
  const newRide = req.body as StudentType;
  Studentmanag.push(newRide);

  return res.json({
    message: "successfully !",
  });
});

StudentGPARouter.put(`/:id`, validate(StudentSchema), (req, res) => {
  const { id } = req.params;
  const updateObj = req.body as StudentType;
  Studentmanag.map((update) => {
    if (update.id === id || update.name === id) {
      update.id = updateObj.id;
      update.name = updateObj.name;
      update.major = updateObj.major;
      update.level = updateObj.level;
      update.GPA = updateObj.GPA;
    }
  });

  return res.json({
    message: "item updated !",
  });
});

StudentGPARouter.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const newRideArr = Studentmanag.filter((del) => {
    return del.id !== id ;
  });

  Studentmanag = newRideArr;

  return res.json({
    message: "item deleted !",
  });
});