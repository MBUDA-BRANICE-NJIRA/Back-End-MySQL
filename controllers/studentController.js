const db = require("../models/indexStart");
const createError = require("http-errors");

//use the model
const Student = db.students;
const Course = db.courses

module.exports = {
  //Add student
  addStudent: async (req, res, next) => {
    try {
      let info = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        course_id: req.body.course_id
      };

      const addStudent = await Student.create(info);
      res.status(200).send(addStudent);
    } catch (error) {
      next(error);
    }
  },

  //get all students with course
  getStudents: async (req, res, next) => {
    try {
      let allStudents = await Student.findAll({
        include:[{model: Course, attributes:['coursename']}]//This the part creating a relationship the model
      });
      res.status(200).send(allStudents);
    } catch (error) {
      next(error);
    }
  },

  //get student by id
  getStudent: async (req, res, next) => {
    try {
      let id = req.params.id;
      let student = await Student.findOne({ where: { student_id: id } });
      if (!student) {
        throw createError(404, "Student does not exist");
      }
      res.status(200).send(student);
    } catch (error) {
      next(error);
    }
  },

  //Update
  UpdateStudent: async (req, res, next) => {
    try {
      let id = req.params.id;
      const student = await Student.findOne({ where: { student_id: id } });
      if (!student) {
        throw createError(404, "Student does not exist");
      }
      res.status(202).send(student);
    } catch (error) {
      next(error);
    }
  },

  //Delete
  deleteStudent: async (req, res, next) => {
    try{
      let id = req.params.id;
      await Student.destroy({where: {student_id: id}})
      res.status(202).send("Student deleted succesfuly")
    }catch(error){
      next(error)
    }
  }
};
