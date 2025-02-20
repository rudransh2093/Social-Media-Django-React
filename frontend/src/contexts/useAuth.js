import {createContext, useContext, useState, useEffect} from 'react'
import { get_auth } from '../api/endpoints';
import { useNavigate} from 'react-router-dom';
import { login } from '../api/endpoints';
const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(false)
    const [authLoading, setAuthLoading] = useState(true)
    const navigate = useNavigate();
    const check_auth = async () => {
        try {
            await get_auth();
            setAuth(true)
        } catch {
            setAuth(false)
        } finally {
            setAuthLoading(false)
        }
    }
    const auth_login = async (username, password) => {
        const data = await login(username, password);
      
        if (data.success) {
          setAuth(true); 
          localStorage.setItem('userData', JSON.stringify({'username': username}))
          navigate(`/${username}`); // Corrected template literal syntax
        } else {
          alert('invalid username or password');
        }
      };
    useEffect(() => {
        check_auth()        
    }, [window.location.pathname])

    return (
        <AuthContext.Provider value={{auth, authLoading, auth_login}}>
          {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);