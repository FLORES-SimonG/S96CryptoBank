import Navbar from "../../components/Navbar/Navbar.jsx";
import Tarjetas from "../../components/Tarjetas/Tarjetas.jsx";
import styles from "./HomeStyle.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.cardInformation}>
        <p className={`${styles.texto}`}>
          <h3>Welcome to the Digital Cryptocurrency Revolution</h3>
          <br></br>
          Are you ready to dive into the exciting world of cryptocurrencies? At
          our Digital Bank, we make buying, exchanging, or selling
          cryptocurrencies as easy as sending a text message. Forget about
          cumbersome paperwork and endless forms. With us, everything is easy,
          fast, and secure.
          <br></br>
          <br></br>
          Once you register on our platform, opening an account is a breeze.
          Simply request an appointment, and we'll be ready to verify your
          details through a video call in no time. It's that simple! And best of
          all, the process is completely free. No hidden fees or fine print.
          <br></br>
          <br></br>
          After completing the video call, you'll be able to make all the
          transactions you want with your favorite cryptocurrency. And don't
          worry, we're available 24/7 to answer your questions and assist you
          with anything you need.
          <br></br>
          <br></br>
          Are you excited to take the first step in this digital adventure?
          Register now and join the cryptocurrency revolution!
        </p>
      </div>
      <div className={styles.cardInformation}>
        <p className={`${styles.texto} ${styles.textoSecundario}`}>
          <h3>Why Choose Us?</h3>
          <br></br>
          In a rapidly changing world, security and trust are more important
          than ever. At our Digital Bank, we take the protection of your digital
          assets and personal data seriously. With cutting-edge technology and
          advanced security measures, we ensure the security of every
          transaction you make.
          <br></br>
          <br></br>
          But we don't stop there. We also pride ourselves on providing
          exceptional customer service, available at all times to address your
          concerns and assist you with any issues you may face. And best of all,
          our registration and account opening process is completely free, with
          no additional costs or unpleasant surprises.
          <br></br>
          <br></br>
          At our Digital Bank, we strive to make your cryptocurrency operations
          simple, secure, and convenient. From the moment you sign up to every
          transaction you make, we are here to ensure you have the best possible
          experience.
          <br />
          <br />
        </p>
      </div>
      <h2>Cryptocurrencies Available</h2>
      <Tarjetas />
    </>
  );
};

export default Home;
