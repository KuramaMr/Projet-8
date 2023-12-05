import './Error.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return(
        <div className='404Container'>
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>
            </Link>
        </div>
    )
    
}

export default ErrorPage