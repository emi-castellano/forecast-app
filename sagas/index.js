import { all } from 'redux-saga/effects'
import { forecastFetchWatcher } from './forecastSaga'
import { signInWatcher, signUpWatcher } from './authSaga'
import { addFavoriteWatcher } from './favoritesSaga'


export default function* rootSaga() {
  yield all([
    forecastFetchWatcher(),
    signInWatcher(),
    signUpWatcher()
    //addFavoriteWatcher() 
  ]);
}