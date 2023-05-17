import { createContext, useState  } from "react";
import  { useNavigate } from "react-router-dom";

const EMAIL = 'test@gmail.com';
const PASSWORD = 'some45';

export const AuthenticationContext  = createContext();

const AuthenticationProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setIsAuthenticated(true);
         navigate('/home');
      }
   };

   const logout = () => {
      setIsAuthenticated(false);
      navigate('/');
   }

   return (
      <AuthenticationContext.Provider value={{ isAuthenticated, login, logout }}>
         {children}
      </AuthenticationContext.Provider>
   );
};

export default AuthenticationProvider;
