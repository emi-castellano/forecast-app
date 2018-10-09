import {
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR
} from '../actions/types'

const initialState = {
    authenticated: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN_SUCCESS:
            return { ...state, authenticated: action.payload }
        case SIGN_IN_ERROR:
            return { ...state, authenticated: action.payload }
        case SIGN_UP_SUCCESS:
            return { ...state, authenticated: action.payload }
        case SIGN_UP_ERROR:
            return { ...state, authenticated: action.payload }
        default: 
            return state
    }
}

export default authReducer