import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Login.module.css";
import axios from "axios";
import { validate } from "../../helpers/validateLogin";

const Login = () => {
  const [itemsFromLogin, setItemsFromLogin] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  //* Funcion MANEJADORA el cambio de los inputs de LOGIN
  const handlerInputChangeFromLogin = (evento) => {
    //?OPCION 1:
    const { name, value } = evento.target;
    setItemsFromLogin({
      ...itemsFromLogin,
      [name]: value,
    });

    const newErrors = validate(itemsFromLogin);
    if (newErrors[name]) {
      setErrors({ ...errors, [name]: newErrors[name] });
    } else {
      const { [name]: value, ...remainingErrors } = errors;
      setErrors(remainingErrors);
    }

    //?OPCION 2:
    // const {name,value} = evento.target;
    // if (name === 'username') {
    //     setItemsFromLogin({
    //         ...itemsFromLogin,
    //         username: value
    //     })
    // }

    // if (name === 'password') {
    //     setItemsFromLogin({
    //         ...itemsFromLogin,
    //         password: value
    //     })
    // }
  };

  //* Funcion MANEJADORA para el submit del formulario de LOGIN
  const handleOnSubmitFromLogin = (evento) => {
    evento.preventDefault();
    const newErrors = validate(itemsFromLogin);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return alert("Formulario de LOGIN NO FUE ENVIADO");
    } else {
      alert("Formulario de LOGIN EXITOSO PA");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.login}>
        <div className={styles.formContainer}>
          <p className={styles.title}>Login</p>
          <form className={styles.form} onSubmit={handleOnSubmitFromLogin}>
            <div className={styles.inputGroup}>
              <label>Username</label>
              <input
                type="text"
                value={itemsFromLogin.username}
                name="username"
                placeholder=""
                onChange={handlerInputChangeFromLogin}
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
                type="password"
                name="password"
                value={itemsFromLogin.password}
                placeholder=""
                onChange={handlerInputChangeFromLogin}
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

export default Login;
