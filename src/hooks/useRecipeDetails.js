import {useState} from "react";
import axios from "axios";

export default function useRecipeDetails() {
    const [recipeDetails, setRecipeDetails] = useState({})
    const url = "https://mein-kochbuch.org/api/rezepte/"

    const getRecipeDetailsById = (id) => {
        if (!(id in recipeDetails)) {
            loadRecipeDetailsById(id)
        }

        return recipeDetails[id]
    }

    const loadRecipeDetailsById = async (id) => {
        await axios.get(url + id)
            .then((response) => response.data)
            .then(data => {
                setRecipeDetails((currentState) => {
                    return {...currentState, [data.pk]: data}
                })
            })
            .catch(console.error)
    }

    return {getRecipeDetailsById}
}
