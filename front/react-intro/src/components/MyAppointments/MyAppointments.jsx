// import '../styles/MyAppointmentsStyles.css';
// import appointments from "../helpers/myTurns.js";
import { useState, useEffect } from "react";
import CardAppointments from "./CardAppointments.jsx";
import styles from "./MyAppointmentsStyles.module.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar.jsx";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then((res) => setAppointments(res.data));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <h2>My Appointments</h2>
        <div className={styles.cards}>
          {appointments.map((appointment) => {
            return (
              <CardAppointments key={appointment.id} turno={appointment} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyAppointments;
