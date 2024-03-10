import Navbar from "../../components/Navbar/Navbar";
import styles from "./Register.module.css";
import axios from "axios";
import { useState } from "react";

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
  console.log(itemsFromRegister);

  //* Funcion MANEJADORA en el cambio de los inputs de REGISTER

  //? OPCION 1:
  const handlerInputChangeFromRegister = (evento) => {
    const { name, value } = evento.target;
    setItemsFromRegister({
      ...itemsFromRegister,
      [name]: value,
    });

    //? OPCION 2:
    //const {name,value} = evento.target;
    // if (name === 'name') {
    //     setItemsFromRegister({
    //         ...itemsFromRegister,
    //         name: value
    //     })
    // }
    // if (name === 'email') {
    //     setItemsFromRegister({
    //         ...itemsFromRegister,
    //         email: value
    //     })
    // }
    // if (name === 'birthdate') {
    //     setItemsFromRegister({
    //         ...itemsFromRegister,
    //         birthdate: value
    //     })
    // }
    // if (name === 'nDni') {
    //     setItemsFromRegister({
    //         ...itemsFromRegister,
    //         nDni: value
    //     })
    // }
    // if (name === 'username') {
    //     setItemsFromRegister({
    //         ...itemsFromRegister,
    //         username: value
    //     })
    // }
    // if (name === 'password') {
    //     setItemsFromRegister({
    //         ...itemsFromRegister,
    //         password: value
    //     })
    // }
  };

  //* Funcion MANEJADORA para el submit del formulario de REGISTER

  const handleOnSubmitFromRegister = (evento) => {
    evento.preventDefault();
    alert("Formulario de REGISTRO enviado");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.register}>
        <div class={styles.formContainer}>
          <p class={styles.title}>Register</p>
          <form class={styles.form} onSubmit={handleOnSubmitFromRegister}>
            <div class={styles.inputGroup}>
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
              ></input>
            </div>
            <div class={styles.inputGroup}>
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
              ></input>
            </div>
            <div class={styles.inputGroup}>
              <label htmlFor="birthdate">Birthdate</label>
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                max={today}
                placeholder=""
                onChange={handlerInputChangeFromRegister}
              />
            </div>
            <div class={styles.inputGroup}>
              <label for="nDni">ID-CardNumber</label>
              <input
                type="number"
                name="nDni"
                id="nDni"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
              ></input>
            </div>
            <div class={styles.inputGroup}>
              <label for="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
              ></input>
            </div>
            <div class={styles.inputGroup}>
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                onChange={handlerInputChangeFromRegister}
              ></input>
            </div>
            <button class={styles.sign}>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
