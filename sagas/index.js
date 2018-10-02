import { all } from 'redux-saga/effects';
import { forecastFetchWatcher } from './forecastSaga';

export default function* rootSaga() {
  yield all([
    forecastFetchWatcher()
  ]);
}