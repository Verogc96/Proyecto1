import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(username, password) {
    let user = axios
      .post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        user = response.data;
        dispatch({ type: "login", payload: user });
      })
      .catch(function (error) {
        if (!error?.response) {
          alert("No Server Response");
          console.log(error);
        } else if (error.response?.status === 400) {
          alert("Username or Password incorrect, try again");
          console.log(error);
        } else if (error.response?.status === 401) {
          alert("Unauthorized");
        } else {
          alert("Login Failed");
        }
      });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
