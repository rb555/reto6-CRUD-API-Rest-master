import { createContext, useState, useContext, useEffect } from "react";
import { resgisterRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("Debe usarse useAuth");
    
    return context;
};

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (errors.length > 0) {
          const timer = setTimeout(() => {
            setErrors([]);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [errors]);


    const signup = async (user) => {
        try {
            const res = await resgisterRequest(user);
            if (res.status === 200) {
            setUser(res.data);
            setIsAuthenticated(true);
            }
        } catch (error) {
           setErrors(error.response);
        }
    };

        
        const signin = async (user) => {
            try { 
                const res = await loginRequest(user);
                setIsAuthenticated(true);
                setUser(res.data);
            } catch (error) {
              setErrors(error.response);
            } 
    };

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
      };

    useEffect(() => {
        const checkLogin = async () => {
          const cookies = Cookies.get();

          if (!cookies.token) {
            setIsAuthenticated(false);
            setLoading(false);
            return setUser(null);
          }
    
          try {
            const res = await verifyTokenRequest(cookies.token);
            console.log(res);
            if (!res.data) {  
              setIsAuthenticated(false);
              setLoading(false);
              return;
            }

            setIsAuthenticated(true);
            setUser(res.data);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
            setUser(null);
            setLoading(false);
          }
        };
        checkLogin();
      }, []);

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            loading,
            user,
            isAuthenticated,
            errors,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;