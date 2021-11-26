import React, {createContext, useState} from "react";
import axios from "axios";

export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [user, setUser] = useState()
    const url = `https://mein-kochbuch.org/api/`

    const login = credentials => {
        return axios
            .post(`${url}/api-token-auth/`, credentials)
            .then(response => response.data)
            .then(data => {
                setUser(data)
            })
    }

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    )
}
