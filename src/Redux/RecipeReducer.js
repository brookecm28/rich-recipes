import axios from 'axios'

const initialState = {
    recipes: {},
    // recipeId: 0
}

const GET_ALL_RECIPES = 'GET_ALL_RECIPES'

export function getAllRecipes() {
    const data = axios.get('/api/recipes/')
    // .then((res) => res.data)

    return {
        type: GET_ALL_RECIPES,
        payload: data
    }
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case GET_ALL_RECIPES: 
            return {...state, recipe: action.payload }
        default:
            return state
    }
}