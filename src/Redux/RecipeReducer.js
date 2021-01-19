import axios from 'axios'

const initialState = {
    recipes: [],
    singleRecipe: []
}

const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
const GET_ONE_RECIPE= 'GET_ONE_RECIPE'

export function getAllRecipes() {
    return {
        type: GET_ALL_RECIPES,
        payload: axios.get('/api/recipes/')
    }
}

export function getOneRecipe(id) {
    return {
        type: GET_ONE_RECIPE,
        payload: axios.get(`/api/recipes/${id}`)
    }
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case GET_ALL_RECIPES + '_FULFILLED': 
            console.log(action.payload.data)
            return {...state, recipe: action.payload.data }
        case GET_ONE_RECIPE + '_FULFILLED':
            console.log(action.payload.data)
            return {...state, singleRecipe: action.payload.data}
        default:
            return state
    }
}