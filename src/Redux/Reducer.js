const initialState = {
    id: 0,
    first_name: '',
    last_name: '',
    email: ''
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT = 'LOGOUT'

export function updateUser(obj) {
    return {
        type: UPDATE_USER,
        payload: obj
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {...state, 
                id: action.payload.id, 
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email}
        case LOGOUT:
            return initialState
        default:
            return state
    }
}