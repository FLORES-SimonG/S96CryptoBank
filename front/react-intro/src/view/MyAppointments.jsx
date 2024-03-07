// import appointments from "../helpers/myTurns.js";
import { useState, useEffect } from "react";
import CardAppointments from "../components/CardAppointments.jsx";
import '../styles/MyAppointmentsStyles.css';
import axios from "axios";

const MyAppointments = () =>{
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/appointments').then((res)=>setAppointments(res.data));},[]);

    return(
        <>
            
           <div id="renderAppointmentsCards">
                <h2>My Appointments</h2>
                <div className="cards">
                    {appointments.map((appointment) => {
                        return  <CardAppointments key={appointment.id} turno={appointment}/>
                    }
                    )}

                </div>
            </div>

        </>
    )
}

export default MyAppointments