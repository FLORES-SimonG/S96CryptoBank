import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";
import { TbPigMoney } from "react-icons/tb";

const Welcome = () => {
  return (
    <div className={styles.welcomePage}>

      <div className={styles.welcomeCard}>
        <p className={styles.welcomeText}>S96 Bank</p>
        <div className={styles.formContainer}>
          <div className={styles.logoPig}>

        <div className={styles.pig}><TbPigMoney /></div>
          </div>
          <p className={styles.subTitle}>Your Crypto-Bank</p>
          <p></p>

          <Link to="/home"><button className={styles.sign}>Explore</button></Link>
        
        </div>
      </div>
    </div>
  );
};

export default Welcome;
