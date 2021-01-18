import axios from 'axios'

const initialState = {
    recipes: [],
    // recipeId: 0
}

const GET_ALL_RECIPES = 'GET_ALL_RECIPES'

export function getAllRecipes() {
    return {
        type: GET_ALL_RECIPES,
        payload: axios.get('/api/recipes/')
    }
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case GET_ALL_RECIPES + '_FULFILLED': 
        console.log(action.payload.data)
            return {...state, recipe: action.payload.data }
        default:
            return state
    }
}