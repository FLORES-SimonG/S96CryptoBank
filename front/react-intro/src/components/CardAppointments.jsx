import { BiCalendarCheck , BiCalendarX  } from 'react-icons/bi';

const CardAppointments = ({ turno: { date, time, user, status } }) => {
  return (
    <div className="card turn">
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