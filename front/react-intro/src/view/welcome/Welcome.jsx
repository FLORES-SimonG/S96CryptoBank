import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={styles.welcomePage}>

      <div className={styles.welcomeCard}>
        <p className={styles.welcomeText}>S96 Bank</p>
        <div className={styles.formContainer}>
          <p className={styles.title}>Welcome</p>
          <p className={styles.subTitle}>Your Crypto-Bank</p>
          <p></p>

          <Link to="/home"><button className={styles.sign}>Explore</button></Link>
        
        </div>
      </div>
    </div>
  );
};

export default Welcome;
