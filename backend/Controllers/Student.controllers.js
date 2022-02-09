// Students controllers
const Student = require("../models/Student");
const StudentController = {};

// Add a student
StudentController.addStudent = async (req, res) => {
  const { firstName, lastName, email, group } = req.body;
  const student = new Student({
    firstName,
    lastName,
    email,
    group,
  });
  try {
    await student.save();
    res.status(201).json({
      message: "Student added successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding student",
      error,
    });
  }
};

// Get all students
StudentController.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: "Error getting students",
      error,
    });
  }
};

// Get one student
StudentController.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: "Error getting student",
      error,
    });
  }
};
// update a student
StudentController.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: "Error updating student",
      error,
    });
  }
};
// delete a student
StudentController.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting student",
      error,
    });
  }
};
// get StudentWithExos
StudentController.getStudentWithExos = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate("exos")
      .exec((err, student) => {
        if (err) {
          res.status(500).json({
            message: "Error getting student",
            error,
          });
        }
        res.json(student);
      });
  } catch (error) {
    res.status(500).json({
      message: "Error getting student",
      error,
    });
  }
};

module.exports = StudentController;
