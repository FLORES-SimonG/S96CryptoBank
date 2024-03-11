import Navbar from "../../components/Navbar/Navbar";
import styles from "./Register.module.css";
import axios from "axios";
import { useState } from "react";
import { validate } from "../../helpers/validateRegister";

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
  // console.log(itemsFromRegister);
  const [errors, setErrors] = useState({});

  //* Funcion MANEJADORA en el cambio de los inputs de REGISTER

  const handlerInputChangeFromRegister = (evento) => {
    //? OPCION 1:

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

    const newErrors = validate(itemsFromRegister);
    if (newErrors[name]) {
      setErrors({ ...errors, [name]: newErrors[name] });
    } else {
      const { [name]: value, ...remainingErrors } = errors;
      setErrors(remainingErrors);
    }
  };

  //* Funcion MANEJADORA para el submit del formulario de REGISTER

  const handleOnSubmitFromRegister = (evento) => {
    
    
    evento.preventDefault();
    const newErrors = validate(itemsFromRegister);
    // console.log(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return alert("El Formulario NO FUE ENVIADO");
    } else {
      alert("Formulario EXITOSO PA");
      // console.log(itemsFromRegister);

      // axios
      //   .post("http://localhost:3000/user/register", itemsFromRegister)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
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
              {errors.name && <p>{errors.name}</p>}
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
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="birthdate">Birthdate</label>
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
              {errors.birthdate && <p>{errors.birthdate}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label>ID-CardNumber</label>
              <input
                value={itemsFromRegister.nDni}
                type="text" //! OJO ACÁ QUE PUEDO TENER PROBLEMA EN BACK
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
              {errors.nDni && <p>{errors.nDni}</p>}
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
              {errors.username && <p>{errors.username}</p>}
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
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className={styles.sign}>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
