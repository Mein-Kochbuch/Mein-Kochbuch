import React, {createContext, ReactElement, useState} from "react";
import axios from "axios";
import {LoginResponse} from "../models/Responses";

interface AuthContextType {
    token?: {},
    login: (credentials: { username: string, password: string }) => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({login: () => Promise.resolve()})

export default function AuthProvider({children}: { children: ReactElement }) {

    const [token, setToken] = useState<{}>()
    const url = `https://mein-kochbuch.org/api/`

    const login = (credentials: { username: string, password: string }) => {
        return axios
            .post<LoginResponse>(`${url}api-token-auth/`, credentials)
            .then(response => response.data)
            .then(data => {
                setToken(data)
            })
    }

    return (
        <AuthContext.Provider value={{token: token, login}}>
            {children}
        </AuthContext.Provider>
    )
}
