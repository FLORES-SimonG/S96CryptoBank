// import '../styles/MyAppointmentsStyles.css';
// import appointments from "../helpers/myTurns.js";
import { useEffect } from "react";
import CardAppointments from "./CardAppointments.jsx";
import styles from "./MyAppointmentsStyles.module.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../../redux/userSlice.js";

const MyAppointments = () => {
  const dispatch = useDispatch();

  const activeUserID = useSelector(
    (state) => state.actualUser.userData.user.id
  );
  const activeUserAppointment = useSelector(
    (state) => state.actualUser.userAppointments
  ); //! ubicación de los appointments dentro del objeto
  console.log(activeUserID);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${activeUserID}`)
      .then((res) => dispatch(setAppointments(res.data.appointments)));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <h2>My Appointments</h2>
        <div className={styles.cards}></div>
        <div className={styles.cards}>
          {activeUserAppointment.map((appointment) => {
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
