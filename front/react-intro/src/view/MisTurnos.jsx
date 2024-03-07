import appointments from "../helpers/myTurns.js";
import { useState } from "react";
import CardAppointments from "../components/CardAppointments.jsx";
import '../styles/MisTurnosStyles.css';

const MisTurnos = () =>{
    const [turnos, setTurnos] = useState(appointments);
    return(
        <>
            

           <div id="renderAppointmentsCards">
                <h2>Mis Turnos</h2>
                <div className="cards">
                    {turnos.map((turno) => {
                        return  <CardAppointments key={turno.id} turno={turno}/>
                    }
                    )}

                </div>
            </div>

        </>
    )
}

export default MisTurnos