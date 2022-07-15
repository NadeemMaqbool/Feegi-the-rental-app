import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIN: false,
    login: () => {},
    logout: () => {}
})