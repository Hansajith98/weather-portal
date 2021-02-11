import { Link } from 'react-router-dom'
import {useState} from 'react';

const NavBar = (props) => {
    const [getState, setGetState] = useState('');
    const [state, setState] = useState('');

    const inputHandler = (event) => {
        setGetState(event.target.value);
      };
      
    const submitHandler = () => {
        setState(getState);
        props.set_current_state(getState);
    };

    return ( 
        <nav className="navbar">
            <Link className="nlink" to="/">Weather Portal</Link>
            <div className="links d-block">
                <div className="col-auto">
                <input
                    type="text"
                    id="location-name"
                    className="form-control"
                    onChange={inputHandler}
                    value={getState} placeholder='Enter the location'
                />
                </div>
                <button className="btn btn-primary mt-2" onClick={submitHandler}>
                    Search
                </button>              
            </div>
        </nav>
     );
}
 
export default NavBar;