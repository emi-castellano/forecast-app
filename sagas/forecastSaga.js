import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { FORECAST_FETCH, FORECAST_FETCH_SUCCESS, FORECAST_FETCH_ERROR } from '../actions/types'

function getWeatherByCity(city) {
  let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=196c9e25707aa971ca65dda7965cd2df';
  return fetch(url).then(response => response.json())
}

export function* getForecastData(payload) {
  try {
    if (payload) {      
      const apiResponse = yield call(getWeatherByCity, payload.payload)
      
      if (apiResponse.cod === '200') {
        yield put({ type: FORECAST_FETCH_SUCCESS, payload: apiResponse }) 
      } else {
        yield put({ type: FORECAST_FETCH_ERROR, payload: 'error' })
      }
    }
  } catch (e) {
    yield put({ type: FORECAST_FETCH_ERROR, payload: 'error' })
  }
}

export function* forecastFetchWatcher() {
  const { payload } = yield takeLatest(FORECAST_FETCH, getForecastData);
  yield fork(getForecastData, payload)
}