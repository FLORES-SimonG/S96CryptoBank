import CreditCard from "../../components/CreditCard/CreditCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./AboutYou.module.css";

const AboutYou = () => {
  return (
    <>
      <Navbar />
      <div className={styles.cardInformation}>
        <ul className={`${styles.texto}`}>
          <li className={styles.textTitle}>Tu Tarjeta S96 Bank</li>
          <br></br>
          <br></br>
          <li>
            With your S96 BankCard, you can make purchases online and in
            physical stores. Additionally, you'll be able to withdraw cash from
            ATMs.
          </li>
          <br></br>

          <li>
            Your S96 BankCard is a prepaid Mastercard debit card, which means
            you need to load it with money before you can use it. You can load
            your S96 BankCard with cash, bank transfer, credit or debit card, or
            with cryptocurrencies.
          </li>
          <br></br>

          <li>
            Until you authenticate your identity through the video call process,
            your S96 BankCard will remain deactivated. Once you have completed
            the authentication process, you can activate your S96 BankCard and
            begin using it. To do this, you will need to schedule an appointment
            for a video call with an agent from S96 Bank.
          </li>
        </ul>
      </div>
      <div className="creditCard">
        <CreditCard></CreditCard>
      </div>
    </>
  );
};

export default AboutYou;
