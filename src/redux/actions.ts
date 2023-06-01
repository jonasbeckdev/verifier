import {createAction} from '@reduxjs/toolkit'
import { IApiException, IUser } from 'models'
import { ILoginPayload } from 'modules/api'

export const login = createAction<ILoginPayload>('login')
export const loginSuccess = createAction<IUser>('loginSuccess')
export const loginFail = createAction<IApiException>('loginFail')
