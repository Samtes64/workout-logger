import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };
    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("New workout added", json);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 w-1/3 h-fit">
      <h3 className="text-xl font-semibold">Add a New Workout</h3>

      <div className="flex flex-col">
        <label htmlFor="title">Exercise Title:</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="load">Load (in kg):</label>
        <input
          type="number"
          id="load"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="reps">Reps:</label>
        <input
          type="number"
          id="reps"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add
      </button>

      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
