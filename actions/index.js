import {
    ADD_FAV, REMOVE_FAV
} from './types'

export const addFavorite = (value) => dispatch => {
    dispatch({
        type: ADD_FAV,
        payload: value
    })
}

export const removeFav = (value) => dispatch => {
    dispatch({
        type: REMOVE_FAV,
        payload: value
    })
}