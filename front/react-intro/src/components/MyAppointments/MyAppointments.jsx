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
  const handleAppointmentCancel =(appointmentID)=>{
    axios.put(`http://localhost:3000/appointments/cancel/${appointmentID}`)
    .then(response=>response.data).then(data=>{
      axios.get(`http://localhost:3000/users/${activeUserID}`).then(res=>dispatch(setAppointments(res.data.appointments))).catch(error=>(console.log(error.message),console.log(`Error al cancelar el turno con id ${appointmentID}, el error es: ${error?.response?.data?.message}`)))
    })
  }


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
        {/* <div className={styles.cards}></div> */}
        <div className={styles.cards}>
          {activeUserAppointment.length?
          activeUserAppointment.map((appointment) => {
            return (
              <CardAppointments key={appointment.id} turno={appointment} id={appointment.id} handleAppointmentCancel={handleAppointmentCancel}/>
            );
          }):<h3>No appointments</h3>}
        </div>
      </div>
    </>
  );
};

export default MyAppointments;
