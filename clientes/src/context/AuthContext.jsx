/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest, CheckToken } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(" use Auth must be used within an AuthProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setloading] = useState(true);
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      // console.log(error.response);
      // console.log(setErrors(error.response.data.message[0]));
      setErrors(error.response.data);
    }
  };
  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log(res);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checklogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setloading(false);
        return setUser(null);
      }
      try {
        const res = await CheckToken(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setloading(false);
          return setUser(null);
        }
        setloading(false);
        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setloading(false);
        setIsAuthenticated(false);
        setUser(null);
      }
    }
    checklogin();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
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
