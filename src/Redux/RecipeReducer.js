import axios from 'axios'

const initialState = {
    recipe: {},
    recipeId: 0
}

const GET_SINGLE_RECIPE = 'GET_SINGLE_RECIPE'

export function getSingleRecipe() {
    const data = axios.get(`/api/recipes/${state.recipeId}`).then((res) => res.data)

    return {
        type: GET_SINGLE_RECIPE,
        payload: data
    }
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case GET_SINGLE_RECIPE: 
            return {...state, recipe: action.payload, recipeId: action.payload.recipe_id}
        default:
            return state
    }
}