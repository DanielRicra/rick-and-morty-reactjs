import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const EMAIL = 'test@gmail.com';
const PASSWORD = 'some45';

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
   const [storedUser, setStoredUser] = useLocalStorage('user-data', { email: '', access: false });
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setStoredUser({ email: userData.email, access: true });
         navigate('/home');
      }
   };

   const logout = () => {
      window.localStorage.removeItem('user-data');
      setIsAuthenticated(false);
      navigate('/');
   };

   useEffect(() => {
      if (storedUser?.access) {
         setIsAuthenticated(true);
      }
   },[storedUser]);

   return (
      <AuthenticationContext.Provider value={{ isAuthenticated, login, logout }}>
         {children}
      </AuthenticationContext.Provider>
   );
};

export default AuthenticationProvider;
