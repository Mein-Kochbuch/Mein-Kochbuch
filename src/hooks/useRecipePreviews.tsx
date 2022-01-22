import {useEffect, useState} from "react";
import {applyFilter} from "../utils/urlService";
import AxiosInstance from "../utils/AxiosInstance";

export default function useRecipePreviews() {
    const [recipePreviews, setRecipePreviews] = useState([])
    const [filter, setFilter] = useState({})
    const [nextUrl, setNextUrl] = useState("")

    const axios = AxiosInstance()

    useEffect(() => {
        axios.get(applyFilter(filter))
            .then((response) => response.data)
            .then(data => {
                setNextUrl(data.next)
                setRecipePreviews((existingRecipes) => existingRecipes.concat(data.results.filter(newRecipe => !existingRecipes.some((i) => i.pk === newRecipe.pk))))
            })
            .catch(console.error)
    }, [filter])

    const loadNext = () => {
        axios.get(nextUrl)
            .then((response) => response.data)
            .then(data => {
                setNextUrl(data.next)
                setRecipePreviews((existingRecipes) => existingRecipes.concat(data.results.filter(newRecipe => !existingRecipes.some((i) => i.pk === newRecipe.pk))))
            })
            .catch(console.error)
    }
    return {recipePreviews, setFilter, loadNext}
}
