import { BiCalendarCheck , BiCalendarX  } from 'react-icons/bi';
import styles from './MyAppointmentsStyles.module.css';
import handleAppointmentCancel from './MyAppointments.jsx';

const CardAppointments = ({ turno: { date, time, user, status } , handleAppointmentCancel,id}) => {

const handleCancel = ()=>{
  window.confirm("Are you sure you want to cancel this appointment?")?(handleAppointmentCancel(id), console.log("Cancelación cancelada")
  ):(console.log("NO SE HA CANCELADO"));}


  return (
    <div className={status === 'active' ? `${styles.card} ${styles.turn}` : `${styles.card} ${styles.inactive}`}>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      {/* <p>User: {user}</p> */}
      <p>
        {status === 'active' ? <BiCalendarCheck  color="green" onClick={handleCancel}/> : (<BiCalendarX  color="red"/>)}
      </p>
    </div>
  );
};

export default CardAppointments;
