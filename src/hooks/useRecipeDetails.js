import {useState} from "react";
import AxiosInstance from "../utils/AxiosInstance";

export default function useRecipeDetails() {
    const [recipeDetails, setRecipeDetails] = useState({})
    const url = "rezepte/"

    const axios = AxiosInstance()

    const getRecipeDetailsById = (id) => {
        if (!(id in recipeDetails)) {
            axios.get(url + id)
                .then((response) => response.data)
                .then(data => {
                    setRecipeDetails((currentState) => {
                        return {...currentState, [data.pk]: data}
                    })
                })
                .catch(console.error)
        }
    }

    const favorizeRecipeById = (id) => {
        return axios.post("favorite/", {pk: id})
            .then(response => response.data)
            .then(data => {
                setRecipeDetails((currentState) => {
                    return {
                        ...currentState, [id]: {...currentState[id], favorite: data.result}
                    }
                })
                return data
            })
            .catch(console.error)
    }

    return {recipeDetails, getRecipeDetailsById, favorizeRecipeById}
}
