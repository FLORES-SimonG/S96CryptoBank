import Navbar from '../../components/Navbar/Navbar';
import styles from './Register.module.css';


const Register = () => {
    return(
        <div>
         <Navbar></Navbar>
            <div className={styles.register}>
                            <div class={styles.formContainer}>
                                <p class={styles.title}>Register</p>
                                <form class={styles.form}>
                                    <div class={styles.inputGroup}>
                                        <label for="name">Name</label>
                                        <input type="text" name="name" id="name" placeholder=""></input>
                                    </div>
                                    <div class={styles.inputGroup}>
                                        <label for="email">Email</label>
                                        <input type="text" name="email" id="email" placeholder=""></input>
                                    </div>
                                    <div class={styles.inputGroup}>
                                        <label for="birthdate">Birthdate</label>
                                        <input type="text" name="birthdate" id="birthdate" placeholder=""></input>
                                    </div>
                                    <div class={styles.inputGroup}>
                                        <label for="nDni">ID-CardNumber</label>
                                        <input type="number" name="nDni" id="nDni" placeholder=""></input>
                                    </div>
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

export default Register;;