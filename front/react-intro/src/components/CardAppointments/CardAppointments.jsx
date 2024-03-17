import { BiCalendarCheck , BiCalendarX  } from 'react-icons/bi';
import styles from '../../view/MyAppointments/MyAppointmentsStyles.module.css';


const CardAppointments = ({ turno: { date, time, status } , handleAppointmentCancel,id}) => {

const handleCancel = ()=>{
  window.confirm("Are you sure you want to cancel this appointment?")?(handleAppointmentCancel(id), console.log("Cancelación COMPLETA", alert("Appointment canceled"))
  ):(console.log("NO SE HA CANCELADO"));}


  return (
    <div className={status === 'active' ? `${styles.card} ${styles.turn}` : `${styles.card} ${styles.inactive}`}>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    
      <p>
        {status === 'active' ? <BiCalendarCheck  color="green" onClick={handleCancel}/> : (<BiCalendarX  color="red"/>)}
      </p>
    </div>
  );
};

export default CardAppointments;
