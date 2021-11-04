import {useEffect, useState} from "react";
import axios from "axios";
import {applyFilter} from "../utils/urlService";

export default function useRecipes() {
    const [recipes, setRecipes] = useState([])
    const [filter, setFilter] = useState({})
    const [nextUrl, setNextUrl] = useState("")

    useEffect(() => {
        axios.get(applyFilter(filter))
            .then((response) => response.data)
            .then(data => {
                setNextUrl(data.next)
                setRecipes((existingRecipes) => existingRecipes.concat(data.results.filter(newRecipe => !existingRecipes.some((i) => i.pk === newRecipe.pk))))
            })
            .catch(console.error)
    }, [filter])

    const loadNext = () => {
        axios.get(nextUrl)
            .then((response) => response.data)
            .then(data => {
                setNextUrl(data.next)
                setRecipes((existingRecipes) => existingRecipes.concat(data.results.filter(newRecipe => !existingRecipes.some((i) => i.pk === newRecipe.pk))))
            })
            .catch(console.error)
    }
    return {recipes, setFilter, loadNext}
}
