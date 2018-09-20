import { combineReducers } from 'redux'

import FavoriteReducer from './FavoritesReducer'

export default combineReducers({
    favState: FavoriteReducer    
})