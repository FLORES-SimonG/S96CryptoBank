import Navbar from '../../components/Navbar/Navbar';
import styles from './Login.module.css';


const Login = () => {
    return(
        <div>
         <Navbar></Navbar>
            <div className={styles.login}>
                            <div class={styles.formContainer}>
                                <p class={styles.title}>Login</p>
                                <form class={styles.form}>
                                    <div class={styles.inputGroup}>
                                        <label for="username">Username</label>
                                        <input type="text" name="username" id="username" placeholder=""></input>
                                    </div>
                                    <div class={styles.inputGroup}>
                                        <label for="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder=""></input>  
                                    </div>
                                    <button class={styles.sign}>Sign in</button>
                                </form>
                            </div>
            </div>
        </div>
        
    )
}

export default Login;;