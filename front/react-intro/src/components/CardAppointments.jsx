import { BiCalendarCheck , BiCalendarX  } from 'react-icons/bi';
import styles from '../styles/MyAppointmentsStyles.module.css';

const CardAppointments = ({ turno: { date, time, user, status } }) => {
  return (
    <div className={`${styles.card} ${styles.turn}`}>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>User: {user}</p>
      <p>
        {status === 'active' ? <BiCalendarCheck  color="green" /> : <BiCalendarX  color="red" />}
      </p>
    </div>
  );
};

export default CardAppointments;
