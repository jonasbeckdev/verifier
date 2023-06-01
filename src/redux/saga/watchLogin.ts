import { PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "models"
import { apiLogin } from "modules/api"
import { call, put, takeLatest } from "redux-saga/effects"
import { login, loginSuccess } from "reduxsaga/actions"

function* handleLogin(action: PayloadAction) {
    if (login.match(action)) {
        const {email, password} = action.payload
        try {
            const user: IUser = yield call(apiLogin, {email, password})
            yield put(loginSuccess(user))
        } catch (exception) {
    
        }
    }
}

export function* watchLogin() {
    yield takeLatest(login.type, handleLogin)
}