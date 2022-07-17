import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIN: false,
    token: null,
    userId: null,
    login: () => {},
    logout: () => {}
})