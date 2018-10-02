import { FORECAST_FETCH_SUCCESS, FORECAST_FETCH_ERROR } from '../actions/types'

const initialState = {
  isLoading: true,
  forecast: {}
}

const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORECAST_FETCH_SUCCESS:
          return { ...state, forecast: action.payload, isLoading: false }
        case FORECAST_FETCH_ERROR:
          return { ...state, forecast: {}, isLoading: false }
        default:
          return state;
      }
}

export default forecastReducer