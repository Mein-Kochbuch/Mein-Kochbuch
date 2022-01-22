import {useEffect, useState} from "react";
import AxiosInstance from "../utils/AxiosInstance";

export default function useCookbooks() {
    const [cookbooks, setCookbooks] = useState([])
    const url = "sammlungen/"

    const axios = AxiosInstance()

    useEffect(() => {
        axios.get(url)
            .then((response) => response.data)
            .then(data => data.results)
            .then(setCookbooks)
            .catch(console.error)
    }, [])

    return {cookbooks}
}
