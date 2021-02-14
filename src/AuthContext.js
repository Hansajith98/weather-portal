import { createContext,useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState(false);

    const toggleAuth = () => {
        setAuth(true);
    }

    return ( 
        <AuthContext.Provider value={{ setAuth ,auth, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;
