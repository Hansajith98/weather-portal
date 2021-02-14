import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const NavBar = () => {
    const {auth , toggleAuth} = useContext(AuthContext);

    return ( 
        <nav className="navbar">
            <Link className="nlink" to="/">Weather Portal</Link>
            <button onClick={() => toggleAuth()}>
                {auth ? 'Logged In': 'Logged Out'}
            </button>
        </nav>
     );
}
 
export default NavBar;