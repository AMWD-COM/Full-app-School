const ExoControllers = require('../Controllers/Exo.controllers');
const express = require('express');
const router = express.Router();

// Add an exo
router.post('/addExo', ExoControllers.addExo);


// Get all exos
router.get('/getExos', ExoControllers.getExos);


// Get one exo
router.get('/getExo/:id', ExoControllers.getExo);

// get exos by student using populate methode
router.get('/getExosByStudent/:id', ExoControllers.getExosByStudent);

// Update an exo
// router.put('/updateExo/:id', ExoControllers.updateExo);

// Delete an exo
// router.delete('/deleteExo/:id', ExoControllers.deleteExo);

module.exports = router;