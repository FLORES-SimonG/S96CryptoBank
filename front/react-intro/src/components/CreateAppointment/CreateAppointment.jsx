import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../../view/Register/Register.module.css";
import axios from "axios";
import { setAppointments } from "../../redux/userSlice.js";

import { useSelector } from "react-redux";

import {
  validateDate,
  validateTime,
  convertDate,
} from "../../helpers/validateMyTurns";

const CreateAppointment = () => {
  const userId = useSelector((state) => state.actualUser.userData.user.id);
  const dispatch = useDispatch();

  const [itemsFromCreateAppointment, setItemsFromCreateAppointment] = useState({
    time: "",
    date: "",
  });
  const [errors, setErrors] = useState({
    time: "Time is required",
    date: "Date is required",
  });

  const handlerInputChangeFromCreateAppointment = (evento) => {
    const { name, value } = evento.target;

    let newErrors = {};
    if (name === "date") {
      if (!validateDate(value)) {
        newErrors[name] = "Fecha inválida. El formato debe ser YYYY-MM-DD.";
      }
    } else if (name === "time") {
      if (!validateTime(value)) {
        newErrors[name] = "Hora inválida. El formato debe ser HH:MM.";
      }
    }

    setItemsFromCreateAppointment({
      ...itemsFromCreateAppointment,
      [name]: value,
    });
    setErrors({ ...errors, ...newErrors });
  };

  const handleOnSubmitFromCreateAppointment = async (evento) => {
    evento.preventDefault();

    const newAppointment = {
      ...itemsFromCreateAppointment,
      date: convertDate(itemsFromCreateAppointment.date),
      userId,
    };
    axios
      .post("http://localhost:3000/appointments/schedule", newAppointment)
      .then(({ data }) => data)
      .then((appointmentInDB) => {
        alert(
          `Ha sido creada la nueva reserva: fecha: ${appointmentInDB.date}, hora: ${appointmentInDB.time}`
        );
        axios
        .get(`http://localhost:3000/users/${userId}`)
        .then((res) => {dispatch(setAppointments(res.data.appointments))})
      })
      .catch((error) => alert("ocurrio un error: " + error.message));
  };


  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((res) => dispatch(setAppointments(res.data.appointments)));
  }, []);

  return (
    <div>
      <div className={styles.register}>
        <div className={styles.formContainer}>
          <p className={styles.title}>New Appointment</p>
          <form
            className={styles.form}
            onSubmit={handleOnSubmitFromCreateAppointment}
          >
            <div className={styles.inputGroup}>
              <label>Date</label>
              <input
                value={itemsFromCreateAppointment.date}
                type="date"
                name="date"
                id="date"
                placeholder=""
                onChange={handlerInputChangeFromCreateAppointment}
                style={{
                  transition: "2s",
                  backgroundColor: errors.birthdate
                    ? "rgba(255, 0, 0, 0.15)"
                    : "rgba(0, 225, 0, 0.15)",
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Time</label>
              <input
                value={itemsFromCreateAppointment.nDni}
                type="time"
                name="time"
                id="time"
                placeholder=""
                onChange={handlerInputChangeFromCreateAppointment}
                style={{
                  transition: "2s",
                  backgroundColor: errors.nDni
                    ? "rgba(255, 0, 0, 0.15)"
                    : "rgba(0, 225, 0, 0.15)",
                }}
              />
            </div>

            <button className={styles.sign}>Reserve</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
