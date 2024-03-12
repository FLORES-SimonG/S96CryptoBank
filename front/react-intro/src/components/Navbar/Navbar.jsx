import './NavbarStyle.module.css'; //!asi se incorpora!
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <h1>S96 Bank</h1>
        <nav>
        
        
            <ul>
                <li><Link to="/Home">Home</Link> </li>
                <li><Link to="/login">Login</Link> </li>
                <li><Link to="/register">Register</Link> </li>
                <li><Link to="/myappointments">My Appointments</Link> </li>
                
            </ul>
            
        
        </nav>
        </>
    );
    }

    export default Navbar;