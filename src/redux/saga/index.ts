import { all, fork } from 'redux-saga/effects'
import {watchLogin} from './watchLogin'

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
    ])
}