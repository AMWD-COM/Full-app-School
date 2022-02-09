const Exo = require("../models/Exo");
const ExoController = {};
const Student = require("../models/Student");
// Add an exo
ExoController.addExo = async (req, res) => {
    try {
        const { title, description, date, duration, level ,students  } = req.body;
        const exo = new Exo({
            title,
            description,
            date,
            duration,
            level,
            students 
        });
        await exo.save();
        res.status(201).json({
            message: "Exo added successfully",
            exo,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding exo",
            error,
        });
    }
};
// add exo with student id 
// ExoController.createExo 


// Get all exos
ExoController.getExos = async (req, res) => {
    try {
        const exos = await Exo.find();
        res.json(exos);
    } catch (error) {
        res.status(500).json({
            message: "Error getting exos",
            error,
        });
    }
};


// Get one exo
ExoController.getExo = async (req, res) => {
    try {
        const exo = await Exo.findById(req.params.id);
        res.json(exo);
    } catch (error) {
        res.status(500).json({
            message: "Error getting exo",
            error,
        });
    }
}
// get exos by student using populate methode 
ExoController.getExosByStudent = async (req, res) => {
    try {
        const exos = await Exo.findById(req.params.id).populate("Student").exec(function (err, story) {
            if (err) return handleError(err);
            console.log('The Student is %s', exos.Student.firstName);
            // prints "The author is Ian Fleming"
          })
        
        res.json(exos);
    } catch (error) {
        res.status(500).json({
            message: "Error getting exos",
            error,
        });
    }
}
// getExosByStudent
ExoController.getExosByStudent = async (req, res) => {
    try {
        const exos = await Exo.find({ students: req.params.id }).populate("students");
        res.json(exos);
    } catch (error) {
        res.status(500).json({
            message: "Error getting exos",
            error,
        });
    }
}

module.exports = ExoController;