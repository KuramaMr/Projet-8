import './ErrorComponents.css';
import { Link } from 'react-router-dom';
import NavBar from "../Navbar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import Marge from '../Marge/Marge.jsx';


function ErrorComponents() {
    return(
        
        <div className='erreurContainer'>
            <Marge>
            <NavBar />
            <span>404</span>
            <h4>Oups ! La page que vous demandez n'existe pas.</h4>
            <p><Link to={"/"}>Retourner sur la page d'accueil</Link></p>
            </Marge>
            <Footer />
        </div>
    )
    
}

export default ErrorComponents