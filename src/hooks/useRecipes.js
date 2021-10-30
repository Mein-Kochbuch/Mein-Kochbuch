import {useEffect, useState} from "react";
import axios from "axios";

export default function useRecipes() {
    const [recipes, setRecipes] = useState([])
    const baseUrl = "https://mein-kochbuch.org/api/rezepte"

    useEffect(() => {
        axios.get(baseUrl)
            .then((response) => response.data)
            .then(data => data.results)
            .then(setRecipes)
            .catch(console.error)
    }, [])

    return {recipes}
}
