const WorkoutDetails=({workout})=>{
    return(
        <div className="flex flex-col gap-3  p-5 shadow-2xl pb-5  bg-white">
            <h2 className="font-semibold text-xl text-green-400">{workout.title}</h2>
            <p><strong>Load (kg): </strong>{workout.load} </p>
            <p><strong>Reps: </strong>{workout.reps} </p>
            <p>{workout.createdAt}</p>
        </div>
    )

    
}

export default WorkoutDetails