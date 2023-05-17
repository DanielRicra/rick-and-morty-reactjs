import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "../context/AuthenticationContext";
import NavBar from "./navbar/NavBar";

const ProtectedRoutes = ({ navbarProps }) => {
   const { isAuthenticated } = useContext(AuthenticationContext);

   if (!isAuthenticated) {
      return <Navigate to="/" />;
   }

   return (
      <>
         <NavBar {...navbarProps} />
         <Outlet />
      </>   
   )
};

export default ProtectedRoutes;