import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { loginUser } from "../services/login";

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
   const [storedUser, setStoredUser] = useLocalStorage('user-data', { email: '', access: false });
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const navigate = useNavigate();

   const login = async (userData) => {
      try {
         const loginData = await loginUser(userData);
         setStoredUser({ email: loginData.result.email, access: true });
         setIsAuthenticated(true);
      } catch (error) {
         console.log('login error');
         alert('Bad credentials');
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
