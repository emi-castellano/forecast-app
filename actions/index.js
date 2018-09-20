import {
    ADD_FAV
} from './types'

export const addFavorite = (value) => ({
    type: ADD_FAV,
    payload: value
})