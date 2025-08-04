const express = require('express');
const router = express.Router();

// controllers
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


// routes

// Get all workout
router.get('/', getWorkouts);

// Get single workout
router.get('/:id', getWorkout);

// POST workout to db
router.post('/', createWorkout);

// Delete
router.delete('/:id', deleteWorkout);

// Update
router.patch('/:id', updateWorkout);

module.exports = router;