import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styles from "../../view/Register/Register.module.css";
import { setAppointments } from "../../redux/userSlice.js";
import { convertDate } from "../../helpers/validateMyTurns";
import { validateMyTurns } from "../../helpers/validateMyTurns";

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

    setItemsFromCreateAppointment({
      ...itemsFromCreateAppointment,
      [name]: value,
    });

    const itemsActualizadoFromCreateAppointment = {
      ...itemsFromCreateAppointment,
      [name]: value,
    };
    const newErrors = validateMyTurns(itemsActualizadoFromCreateAppointment);

    if (newErrors[name]) {
      setErrors({ ...errors, [name]: newErrors[name] });
    } else {
      const { [name]: value, ...remainingErrors } = errors;
      setErrors(remainingErrors);
    }
  };

  const handleOnSubmitFromCreateAppointment = async (evento) => {
    evento.preventDefault();

    const newErrors = validateMyTurns(itemsFromCreateAppointment);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      //! console.log("Errores en el formulario:", newErrors);
      return alert(
        "Please complete the form correctly for THE APPOINTMENT TO BE CREATED"
      );
    }

    try {
      //! console.log(newErrors);
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        {
          date: convertDate(itemsFromCreateAppointment.date),
          time: itemsFromCreateAppointment.time,
          userId: userId,
        }
      );

      //! console.log("Respuesta del servidor:", response.data);

      alert(
        `The new reservation has been created: 
        - DATE: ${response.data.date} 
        - TIME: ${response.data.time}`
      );
      axios.get(`http://localhost:3000/users/${userId}`).then((res) => {
        dispatch(setAppointments(res.data.appointments));
      });
    } catch (error) {
      console.error("Error al enviar el formulario de APPOINTMENT:", error);
      alert("Error submitting the form, incorrect time or date");
    }
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
                min={new Date().toISOString().split("T")[0]}
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
                step="900"
                min="03:00"
                max="23:00"
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
