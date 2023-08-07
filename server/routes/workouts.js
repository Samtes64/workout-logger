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
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a workout" });
});
//update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update a  workout" });
});

module.exports = router;
