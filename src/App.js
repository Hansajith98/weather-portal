import NavBar from './NavBar';
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Home';
// import { ThemeContext } from './ThemeContext';
import AuthContextProvider from './AuthContext';

function App() {
  return (
    <Router>
      <div className="App">
      <AuthContextProvider>
     
        <NavBar></NavBar>
        <div className="component">
          <Switch>
            <Home></Home>
          </Switch>
        </div>
        
      </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
