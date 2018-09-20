import {
    ADD_FAV,
    REMOVE_FAV
} from '../actions/types'

const INITIAL_STATE = {
    favorites: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                favorites: [...state.favorites, action.payload]
            }
            break;
        case REMOVE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(item => action.payload !== item)
            }
        default:
            return state
    }
}