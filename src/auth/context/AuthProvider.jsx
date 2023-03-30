import React, { useReducer } from "react";
import { authReducer } from "./authReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return {
      logged: false,
      user: null,
    };
  }

  return {
    logged: true,
    user: user.name, // devolvemos el nombre del usuario como cadena de texto
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = async (name = "") => {
    const user = { name };
    const action = {
      type: types.login,
      payload: name,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };
  const logout = () =>{
    localStorage.removeItem('user')
    const action = {
      type: types.logout,
    }
    dispatch(action)
  }
  return (
    <AuthContext.Provider
      value={{
        logged: state.logged,
        user: state.user,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
