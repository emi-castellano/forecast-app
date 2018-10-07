import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native'
import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR
} from '../actions/types'

import { LOCAL_IP } from 'react-native-dotenv'

async function authApiCall(action, data) {
    try {
        if (action === SIGN_IN_REQUEST) {
            let url = `http://${LOCAL_IP}:8080/sign-in`
        
            return await fetch(url,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        username: data.username,
                        password: data.password,
                        email: data.email,
                        fullname: data.fullname
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(response => response.json())
        } else {
            
        }
    } catch (err) {
        console.log(err)
    }
}

export function* userSignIn(payload) {
    try {
        if (payload) {
            const apiResponse = yield call(authApiCall, SIGN_IN_REQUEST, payload.payload)
            if (apiResponse.token) {
                yield AsyncStorage.setItem('token', apiResponse.token )
                yield put({ type: SIGN_IN_SUCCESS, payload: true })
            } else {
                yield put({ type: SIGN_IN_ERROR, payload: false })
            }
        }
    } catch (e) {
        yield put({ type: SIGN_IN_ERROR, payload: 'error' })
    }
}

export function* signInWatcher() {
    const { payload } = yield takeLatest(SIGN_IN_REQUEST, userSignIn);
    yield fork(userSignIn, payload)
}