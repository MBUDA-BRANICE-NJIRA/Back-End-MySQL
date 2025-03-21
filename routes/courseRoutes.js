const express = require('express');
const routes = express.Router();
const courseController = require('../controllers/courseController');

// Get all Courses
routes.get('/getAllCourses', courseController.getAllCourses);

// Add a student
routes.post('/addCourse', courseController.addCourse);

// Get Course by ID
routes.get('/getCourse/:id', courseController.getCourse);

// Update a Course
routes.patch('/updateCourse/:id', courseController.UpdateCourse);

// Delete a Course
routes.delete('/deleteCourse/:id', courseController.deleteCourse);

module.exports = routes;
