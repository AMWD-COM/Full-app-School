const StudentController = require('../Controllers/Student.controllers');
const express = require('express');
const router = express.Router();


// Add a student
router.post('/addStudent', StudentController.addStudent);


// Get all students
router.get('/getStudents', StudentController.getStudents);


// Get one student
router.get('/getStudent/:id', StudentController.getStudent);


// Update a student
// router.put('/updateStudent/:id', StudentController.updateStudent);


// Delete a student
// router.delete('/deleteStudent/:id', StudentController.deleteStudent);


module.exports = router;