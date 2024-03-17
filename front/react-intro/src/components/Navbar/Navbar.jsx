import './NavbarStyle.module.css'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiExitDoor } from "react-icons/gi";


const Navbar = () => {
    
    const login = useSelector((state)=>state.actualUser.userData.login)
    console.log(login);
    const handleOnClickLogOut = (event) => {
        return window.confirm("Are you sure you want to log out?")
        ?(login = useSelector((state)=>state.actualUser.userData.login = false), alert("You have been logged out"))
        :( event.preventDefault(),alert("You are still logged in"));

    }

    return (
        <>
        <h1>S96 Bank</h1>
        <nav>
        
        
            <ul>
                <li><Link to="/Home">Home</Link> </li>
                {!login && <li><Link to="/login">Login</Link> </li>}
                {!login && <li><Link to="/register">Register</Link> </li>}
                {login && <li><Link to="/myappointments">My Appointments</Link> </li>}
                {login && <li><Link to="/" onClick={(event) => handleOnClickLogOut(event)}><GiExitDoor /></Link> </li>}
                
            </ul>
            
        
        </nav>
        </>
    );
    }

    export default Navbar;