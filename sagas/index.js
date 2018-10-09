import { all } from 'redux-saga/effects'
import { forecastFetchWatcher } from './forecastSaga'
import { signInWatcher, signUpWatcher } from './authSaga'


export default function* rootSaga() {
  yield all([
    forecastFetchWatcher(),
    signInWatcher(),
    signUpWatcher()
    //addFavoriteWatcher()
  ]);
}