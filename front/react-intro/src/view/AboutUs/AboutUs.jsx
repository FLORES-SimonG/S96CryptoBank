
import Navbar from "../../components/Navbar/Navbar";
import styles from "./AboutUs.module.css";

const AboutYou = () => {
  return (
    <>
      <Navbar />
      <div className={styles.cardInformation}>
  <ul className={`${styles.texto}`}>
    <li className={styles.textTitle}>Our Story</li>
    <br /><br />
    <li>
      S96 Bank is a cryptocurrency bank founded in 2024 by Simon G. Flores. The bank was created as part of a project to pass the Full Stack Developer exam.
    </li>
    <br />
    <li>
      Our physical headquarters are located in Gelsenkirchen, Germany. From there, we strive to provide innovative and secure financial services to our clients across Europe.
    </li>
    <br />
    <li>
      Initially conceived as an academic project, S96 Bank has quickly gained popularity and has been launched into the market to compete with other banks in Europe. We pride ourselves on offering an easy-to-use and secure platform for buying, selling, and managing cryptocurrencies, as well as traditional banking services.
    </li>
  </ul>
</div>
<div className={styles.divEquipo}>
    <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="equipo" />
</div>
<div className={styles.cardInformation}>
  <ul className={`${styles.texto} ${styles.textoSecundario}`}>
    <li className={styles.textTitle}>Our Team</li>
    <br /><br />
    <li>
      At S96 Bank, we have assembled a talented and dedicated team of professionals committed to providing the best possible service to our clients.
    </li>
    <br />
    <li>
      Our team consists of experts in various fields, including finance, technology, customer service, and compliance. Each member brings unique skills and perspectives to the table, allowing us to offer comprehensive solutions and personalized assistance to meet the diverse needs of our clients.
    </li>
    <br />
    <li>
      We believe in fostering a collaborative and inclusive work environment where every team member is valued and empowered to contribute their ideas and expertise. Together, we work tirelessly to innovate and improve our products and services, ensuring that our clients receive the highest level of support and satisfaction.
    </li>
    <br />
    <li>
      Meet our dedicated team and discover how we're reshaping the future of banking with passion, creativity, and integrity.
    </li>
  </ul>
</div>
    </>
  );
};

export default AboutYou;
