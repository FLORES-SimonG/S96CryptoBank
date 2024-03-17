import Navbar from "../../components/Navbar/Navbar";
import styles from "./Register.module.css";
import axios from "axios";
import { useState } from "react";
import {  validateRegister } from "../../helpers/validateRegister";

const Register = () => {
  const today = new Date().toISOString().split("T")[0];
  const [itemsFromRegister, setItemsFromRegister] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  //! Funcion MANEJADORA en el cambio de los inputs de REGISTER

  const handlerInputChangeFromRegister = (evento) => {
    const { name, value } = evento.target;
    setItemsFromRegister({ ...itemsFromRegister, [name]: value });

    const itemsActualizadoFromRegister = {
      ...itemsFromRegister,
      [name]: value,
    };
    const newErrors = validateRegister(itemsActualizadoFromRegister);
    if (newErrors[name]) {
      setErrors({ ...errors, [name]: newErrors[name] });
    } else {
      const { [name]: value, ...remainingErrors } = errors;
      setErrors(remainingErrors);
    }
  };

  //* Funcion MANEJADORA para el submit del formulario de REGISTER

  const handleOnSubmitFromRegister = async (evento) => {
    evento.preventDefault();

    const newErrors = validateRegister(itemsFromRegister);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return alert("Complete el formulario correctamente para que sea enviado");
    }

    try {
     
      console.log("Datos enviados al servidor:", itemsFromRegister);
      const response = await axios.post(
        "http://localhost:3000/users/register",
        {
          name: itemsFromRegister.name,
          email: itemsFromRegister.email,
          birthdate: itemsFromRegister.birthdate,
          nDni: Number(itemsFromRegister.nDni),
          username: itemsFromRegister.username,
          password: itemsFromRegister.password,
        }
      );

      console.log("Respuesta del servidor:", response.data);
      alert("Formulario de REGISTER EXITOSO PA");
    } catch (error) {
      console.error("Error al enviar el formulario de REGISTER:", error);
      alert("Error al enviar el formulario, Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.register}>
        <div className={styles.formContainer}>
          <p className={styles.title}>Register</p>
          <form className={styles.form} onSubmit={handleOnSubmitFromRegister}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input
                value={itemsFromRegister.name}
                type="text"
                name="name"
                id="name"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
                style={{
                  transition: "2s",
                  backgroundColor: errors.name
                    ? "rgba(255, 0, 0, 0.15)"
                    : "rgba(0, 225, 0, 0.15)",
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                value={itemsFromRegister.email}
                type="text"
                name="email"
                id="email"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
                style={{
                  transition: "2s",
                  backgroundColor: errors.email
                    ? "rgba(255, 0, 0, 0.15)"
                    : "rgba(0, 225, 0, 0.15)",
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Birthdate</label>
              <input
                value={itemsFromRegister.birthdate}
                type="date"
                name="birthdate"
                id="birthdate"
                max={today}
                placeholder=""
                onChange={handlerInputChangeFromRegister}
                style={{
                  transition: "2s",
                  backgroundColor: errors.birthdate
                    ? "rgba(255, 0, 0, 0.15)"
                    : "rgba(0, 225, 0, 0.15)",
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>ID-CardNumber</label>
              <input
                value={itemsFromRegister.nDni}
                type="number" 
                name="nDni"
                id="nDni"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
                style={{
                  transition: "2s",
                  backgroundColor: errors.nDni
                    ? "rgba(255, 0, 0, 0.15)"
                    : "rgba(0, 225, 0, 0.15)",
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Username</label>
              <input
                value={itemsFromRegister.username}
                type="text"
                name="username"
                id="username"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
                style={{
                  transition: "2s",
                  backgroundColor: errors.username
                    ? "rgba(255, 0, 0, 0.15)"
                    : "rgba(0, 225, 0, 0.15)",
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                value={itemsFromRegister.password}
                type="password"
                name="password"
                id="password"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
                style={{
                  transition: "2s",
                  backgroundColor: errors.password
                    ? "rgba(255, 0, 0, 0.15)"
                    : "rgba(0, 225, 0, 0.15)",
                }}
              />
            </div>
            <button className={styles.sign}>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
