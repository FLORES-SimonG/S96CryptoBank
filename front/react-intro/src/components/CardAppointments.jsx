const CardAppointments = ({ turno: { date, time, user, status } }) => {
  return (
    <div>
      <p>Fecha: {date}</p>
      <p>Hora: {time}</p>
      <p>Usuario: {user}</p>
      <p>Estado: {status}</p>
    </div>
  );
};

export default CardAppointments;
