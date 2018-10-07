import { combineReducers } from 'redux'

import favoriteReducer from './FavoritesReducer'
import forecastReducer from './ForecastReducer'
import authReducer from './AuthReducer'

export default combineReducers({
    favState: favoriteReducer,
    dataForecast: forecastReducer,
    authState: authReducer
})