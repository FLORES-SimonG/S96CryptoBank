import Navbar from '../../components/Navbar/Navbar';
import './Login.css';


const Login = () => {
    return(
        <div>
         <Navbar></Navbar>
            <div className='login'>
                            <div class="form-container">
                                <p class="title">Login</p>
                                <form class="form">
                                    <div class="input-group">
                                        <label for="username">Username</label>
                                        <input type="text" name="username" id="username" placeholder=""></input>
                                    </div>
                                    <div class="input-group">
                                        <label for="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder=""></input>  
                                    </div>
                                    <button class="sign">Sign in</button>
                                </form>
                            </div>
                        {/* </div> */}
                        
                    </div>
        </div>
        
    )
}

export default Login;;