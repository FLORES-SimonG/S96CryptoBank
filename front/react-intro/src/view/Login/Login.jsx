import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Login.module.css";
import axios from "axios";
import { validateLogin } from "../../helpers/validateLogin";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [itemsFromLogin, setItemsFromLogin] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});


  const handlerInputChangeFromLogin = (evento) => {
    //*OPCION 1:
    const { name, value } = evento.target;
    setItemsFromLogin({ ...itemsFromLogin, [name]: value });

    const itemsActualizadoFromLogin = { ...itemsFromLogin, [name]: value };
    const newErrors = validateLogin(itemsActualizadoFromLogin);

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
    // } y así sucesivamente con password y lo que tenga el formulario.
  };


  const handleOnSubmitFromLogin = async (evento) => {
    evento.preventDefault();

    const newErrors = validateLogin(itemsFromLogin);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("Errores en el formulario:", newErrors);
      return alert("Please complete the form correctly for it to be submitted");
    }

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username: itemsFromLogin.username,
        password: itemsFromLogin.password,
      });

      console.log("Respuesta del servidor:", response.data);
      dispatch(setUser(response.data));
      alert("Login form SENT SUCCESSFULLY");
      navigate("/home");
    } catch (error) {
      console.error("Error al enviar el formulario de LOGIN:", error);
      alert("Error submitting the form. Incorrect username or password");
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
                  backgroundColor:
                    errors.username === true
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
                  backgroundColor:
                    errors.password === true
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
