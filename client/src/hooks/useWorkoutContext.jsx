import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("useWorkoutContext must be used inside a WorkoutContextProvider");
  }

  return context;
}