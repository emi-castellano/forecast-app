import {
    ADD_FAV
} from '../actions/types'

const INITIAL_STATE = {
    favorites: []
}

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case ADD_FAV:
        return {
            moves: [...state.moves, action.payload]
        }
        break;
        default:
            return state
    }
}