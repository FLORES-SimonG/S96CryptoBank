import './NavbarStyle.module.css'; //!asi se incorpora!

const Navbar = () => {
    return (
        <>
        <h1>S96 Bank</h1>
        <nav>
        {/* <p >Este es un nav</p> */}
        
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">About us</a></li>
                <li><a href="/create">Investors</a></li>
                <li><a href="/create">Newsroom</a></li>
                <li><a href="/create">Contact us</a></li>
                <li><a href="/create">Home Banking</a></li>
            </ul>
            
        
        </nav>
        </>
    );
    }

    export default Navbar;