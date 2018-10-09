import { takeLatest, put, call, fork } from 'redux-saga/effects'
import { ADD_FAV, REMOVE_FAV } from '../actions/types'

export function* addFavorite(data) {
    try {
      yield put({ type: ADD_FAV, payload: data })
    } catch (e) {
      console.log(e)
    }
}
  
export function* addFavoriteWatcher() {
    const { payload } = yield takeLatest(ADD_FAV, addFavorite)
    yield fork(addFavorite, payload)
}