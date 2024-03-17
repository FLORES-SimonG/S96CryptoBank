import 'normalize.css'
import Home from './view/Home/Home.jsx';
import MyAppointments from "./view/MyAppointments/MyAppointments.jsx"
import Login from './view/Login/Login.jsx';
import Register from './view/Register/Register.jsx';
// import Navbar from './components/Navbar/Navbar.jsx';
import {Routes, Route} from 'react-router-dom';
import Welcome from './view/welcome/Welcome.jsx';

import AboutYou from './view/AboutYou/AboutYou.jsx';
import AboutUs from './view/AboutUs/AboutUs.jsx';


function App() {
  return (
    <>
    <Routes>
   
    <Route path="/" element={<Welcome/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/myappointments" element={<MyAppointments/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/aboutyou' element={<AboutYou/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    
  
  </Routes>
    </>
  )
}

export default App