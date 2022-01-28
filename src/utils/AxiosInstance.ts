import axios, {AxiosRequestConfig} from "axios";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";

export default function AxiosInstance() {
    const {token} = useContext(AuthContext)
    const options: AxiosRequestConfig = {
        baseURL: `https://mein-kochbuch.org/api/`,
    }

    if (token) options.headers = {Authorization: `Token ${token}`}

    return axios.create(options);
}
