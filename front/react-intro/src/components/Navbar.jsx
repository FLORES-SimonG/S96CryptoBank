import '../styles/NavbarStyle.css'; //!asi se incorpora!
const Navbar = () => {
    return (
        <>
        <nav>
        {/* <p >Este es un nav</p> */}
        
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">Beneficios</a></li>
                <li><a href="/create">Préstamos</a></li>
                <li><a href="/create">Seguros</a></li>
                <li><a href="/create">Tarjetas y Cuentas</a></li>
                <li><a href="/create">Centro de Ayuda</a></li>
                <li><a href="/create">Home Banking</a></li>
            </ul>
            
        
        </nav>
        </>
    );
    }

    export default Navbar;