import { combineReducers } from 'redux'

import favoriteReducer from './FavoritesReducer'
import forecastReducer from './ForecastReducer'

export default combineReducers({
    favState: favoriteReducer,
    dataForecast: forecastReducer
})