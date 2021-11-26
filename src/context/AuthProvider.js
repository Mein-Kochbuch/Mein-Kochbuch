import React, {createContext, useState} from "react";
import axios from "axios";

export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [user, setUser] = useState({
        "pk": 13,
        "email": "info@mein-kochbuch.org",
        "username": "test",
        "token": "4b649a8295a6ad87e1107cbadbc8ff4a3517e7db",
        "premium": false,
        "subscription": {
            "start": null,
            "end": null
        }
    })
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
