const express = require('express');
const routes = express.Router();
const studentController = require('../controllers/studentController');

// Get all Students
routes.get('/getAllStudents', studentController.getStudents);

// Add a student
routes.post('/addStudent', studentController.addStudent);

// Get student by ID
routes.get('/getStudent/:id', studentController.getStudent);

// Update a student
routes.patch('/updateStudent/:id', studentController.UpdateStudent);

// Delete a student
routes.delete('/deleteStudent/:id', studentController.deleteStudent);

module.exports=routes;
