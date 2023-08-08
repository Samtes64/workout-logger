import { useEffect, useState } from "react" 
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = ()=>{
    const [workouts, setWorkouts] = useState(null) 

    useEffect(()=>{

        const fetchWorkouts = async()=>{

            

            const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)
            }
        }

        fetchWorkouts()

    },[])

    return(
        <div className="flex gap-5">
            <div className="w-1/2">
              {workouts && workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}/>
              ))}  
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home