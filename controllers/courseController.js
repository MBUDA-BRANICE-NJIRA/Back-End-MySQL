const db = require("../models/indexStart");
const createError = require("http-errors");

//use the model
const Course = db.Course;


module.exports = {
  //Add Course
  addCourse: async (req, res, next) => {
    try {
      let info = {
        coursename: req.body.coursename,
       
      };

      const addCourse = await Course.create(info);
      res.status(200).send(addCourse);
    } catch (error) {
      next(error);
    }
  },

  //get all  course
  getCourse: async (req, res, next) => {
    try {
      let allCourses = await Course.findAll({});
      res.status(200).send(allCourses);
    } catch (error) {
      next(error);
    }
  },

  //get Course by id
  getCourse: async (req, res, next) => {
    try {
      let id = req.params.id;
      let course = await Course.findOne({ where: { course_id: id } });
      if (!course) {
        throw createError(404, "Course does not exist");
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
