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
      res.status(200).send(course);
    } catch (error) {
      next(error);
    }
  },

  //Update course
  UpdateCourse: async (req, res, next) => {
    try {
      let id = req.params.id;
      const course = await Course.findOne({ where: { course_id: id } });
      if (!course) {
        throw createError(404, "Course does not exist");
      }
      res.status(202).send(course);
    } catch (error) {
      next(error);
    }
  },

  //Delete Course
  deleteCourse: async (req, res, next) => {
    try{
      let id = req.params.id;
      await Course.destroy({where: {course_id: id}})
      res.status(202).send("Course deleted succesfuly")
    }catch(error){
      next(error)
    }
  }
};
