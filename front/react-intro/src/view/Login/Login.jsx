import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Login.module.css';
import axios from 'axios';



const Login = () => {
    const [itemsFromLogin,setItemsFromLogin] = useState({
        username: '',
        password: ''
    });

    console.log(itemsFromLogin);
 
    //* Funcion MANEJADORA el cambio de los inputs
    const handlerInputChange= (evento)=>{
        
        // console.log(evento);

        //?OPCION 1:
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

        //?OPCION 2:
        const {name,value} = evento.target;
        setItemsFromLogin({
            ...itemsFromLogin,
            [name]: value
        })
        
    }

    //* Funcion MANEJADORA para el submit del formulario
    const handleOnSubmit = (evento)=>{
        evento.preventDefault();
        console.log('Formulario enviado');
        }  








    return(
        <div>
         <Navbar></Navbar>
            <div className={styles.login}>
                            <div class={styles.formContainer}>
                                <p class={styles.title}>Login</p>
                                <form class={styles.form} onSubmit={handleOnSubmit}>
                                    <div class={styles.inputGroup}>
                                        <label >Username</label>
                                        <input type="text" value={itemsFromLogin.username}
                                        name='username'
                                        placeholder='' onChange={handlerInputChange}></input>  
                                       
                                    </div>
                                    <div class={styles.inputGroup}>
                                        <label >Password</label>
                                        <input type="password" name="password" value={itemsFromLogin.password} placeholder="" onChange={handlerInputChange}></input>  
                                    </div>
                                    <button class={styles.sign}>Sign in</button>
                                </form>
                            </div>
            </div>
        </div>
        
    )
}

export default Login;;