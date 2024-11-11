import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const RequireAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // trạng thái xác thực ban đầu là null
  const jwtToken = Cookies.get("jwtToken");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_DOMAIN}api/User/Profile`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    if (jwtToken) {
      verifyToken();
    } else {
      setIsAuthenticated(false);
    }
  }, [jwtToken]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default RequireAuth;
