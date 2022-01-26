import {RecipePreview} from "./RecipePreview";
import {Cookbook} from "./Cookbook";

export interface RecipeListResponse {
    cout: number,
    next?: string
    previous?: string
    results: RecipePreview[]
}

export interface FavorizeResponse {
    result: boolean
}


export interface RatingResponse {
    result: {
        rating: number
    }
}

export interface LoginResponse {

}

export interface CookbookResponse {
    results: Cookbook[]
}
