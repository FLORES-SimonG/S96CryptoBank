// import appointments from "../helpers/myTurns.js";
import { useState, useEffect } from "react";
import CardAppointments from "../components/CardAppointments.jsx";
// import '../styles/MyAppointmentsStyles.css';
import styles from '../styles/MyAppointmentsStyles.module.css';
import axios from "axios";

const MyAppointments = () =>{
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/appointments').then((res)=>setAppointments(res.data));},[]);

    return(
        <>
            
           <div  >
                <h2>My Appointments</h2>
                <div className={styles.cards}>
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