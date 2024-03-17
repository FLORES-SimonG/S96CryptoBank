import Navbar from "../../components/Navbar/Navbar.jsx";
import Tarjetas from "../../components/Tarjetas/Tarjetas.jsx";
import styles from "./HomeStyle.module.css";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className={styles.cardInformation}>
                <p className={`${styles.texto}`}>
                    <h3>Bienvenido a la Revolución Digital de las Criptomonedas</h3>
                    <br></br>
                    ¿Listo para adentrarte en el emocionante mundo de las criptomonedas? En nuestro Banco Digital, hacemos que comprar, cambiar o vender criptomonedas sea tan sencillo como enviar un mensaje de texto. Olvídate de los trámites engorrosos y del papeleo interminable. Con nosotros, todo es fácil, rápido y seguro.
                    <br></br>
                    <br></br>
                    Una vez te registres en nuestra plataforma, abrir una cuenta será pan comido. Simplemente solicita un turno, y en poco tiempo estaremos listos para confirmar tus datos a través de una videollamada. ¡Así de simple! Y lo mejor de todo, el proceso es totalmente gratuito. Sin tarifas ocultas ni letras pequeñas.
                    <br></br>
                    <br></br>
                    Después de completar la videollamada, podrás realizar todas las transacciones que desees con tu criptomoneda favorita. Y no te preocupes, estamos disponibles las 24 horas del día, los 7 días de la semana, para responder a tus preguntas y ayudarte en lo que necesites.
                    <br></br>
                    <br></br>
                    ¿Estás emocionado por dar el primer paso en esta aventura digital? ¡Regístrate ahora y únete a la revolución de las criptomonedas!
                </p>
            </div>
            <div className={styles.cardInformation}>
                <p className={`${styles.texto} ${styles.textoSecundario}`}>
                    <h3>¿Por qué Elegirnos?</h3>
                    <br></br>
                    En un mundo donde todo cambia rápidamente, la seguridad y la confianza son más importantes que nunca. En nuestro Banco Digital, nos tomamos en serio la protección de tus activos digitales y datos personales. Con tecnología de vanguardia y medidas de seguridad avanzadas, garantizamos la seguridad de cada transacción que realizas.
                    <br></br>
                    <br></br>
                    Pero no nos detenemos ahí. También nos enorgullece ofrecer un servicio al cliente excepcional, disponible en todo momento para resolver tus dudas y ayudarte en cualquier problema que puedas enfrentar. Y lo mejor de todo, nuestro proceso de registro y apertura de cuenta es completamente gratuito, sin costos adicionales ni sorpresas desagradables.
                    <br></br>
                    <br></br>
                    En nuestro Banco Digital, nos esforzamos por hacer que tus operaciones con criptomonedas sean simples, seguras y convenientes. Desde el momento en que te registras hasta cada transacción que realizas, estamos aquí para garantizar que tengas la mejor experiencia posible.
                    <br />
                    <br />
                    
                </p>
            </div>
            <h2>Criptomonedas Disponibles</h2>
            <Tarjetas />
        </>
    )
}

export default Home;
