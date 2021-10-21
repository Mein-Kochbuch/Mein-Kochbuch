import {useEffect, useState} from "react";
import axios from "axios";

export default function useCookbooks() {
    const [cookbooks, setCookbooks] = useState([])
    const url = "https://mein-kochbuch.org/api/sammlungen/"

    useEffect(() => {
        axios.get(url)
            .then((response) => response.data)
            .then(data => data.results)
            .then(setCookbooks)
            .catch(console.error)
    }, [])

    return {cookbooks}
}
