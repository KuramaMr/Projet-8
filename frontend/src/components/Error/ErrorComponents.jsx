import './Error.css';
import { Link } from 'react-router-dom';
import NavBar from "../Navbar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";

function ErrorComponents() {
    return(
        
        <div className='404Container'>
            <NavBar />
            <p>404</p>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>
            </Link>
            <Footer />
        </div>
    )
    
}

export default ErrorComponents