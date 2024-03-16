import './NavbarStyle.module.css'; //!asi se incorpora!
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    
    const login = useSelector((state)=>state.actualUser.userData.login)

    return (
        <>
        <h1>S96 Bank</h1>
        <nav>
        
        
            <ul>
                <li><Link to="/Home">Home</Link> </li>
                <li><Link to="/login">Login</Link> </li>
                <li><Link to="/register">Register</Link> </li>
                {login && <li><Link to="/myappointments">My Appointments</Link> </li>}
                
            </ul>
            
        
        </nav>
        </>
    );
    }

    export default Navbar;