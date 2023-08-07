const express = require("express");
const workoutController = require('../controller/workoutController')



const router = express.Router();

//get all workouts
router.get("/", workoutController.getWorkouts);

//get a single workouts
router.get("/:id", workoutController.getWorkout);

//post a new workout
router.post("/",workoutController.createWorkout );

//Delete a workout
router.delete("/:id", workoutController.deleteWorkout);
//update a workout
router.patch("/:id",workoutController.updateWorkout);

module.exports = router;
