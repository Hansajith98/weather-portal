import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import {useState} from 'react';

function App() {
  const [current_state, setCurrentState] = useState('London');

  return (
    <Router>
      <div className="App">
        <NavBar set_current_state={setCurrentState}></NavBar>
        <div className="component">
          <Switch>
            <Home loca={current_state}></Home>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
