import axios from "axios"
import { IApiResponse, IUser } from "models"
import { store } from "reduxsaga/store"
import { apiBase, enableSimulate } from "./constants"

interface GetPayload {
    url: string
    headers?: any,
    authorization?: boolean
}

interface PostPayload extends GetPayload {
    body?: string
}

export interface ApiException {
    code: string | undefined
    message: string
}

const setHeaderAuthrization = (headers: any)=>{
    const ret = headers?headers:{}
    const token = store.getState().userReducer.user?.token
    if (token) {
        ret['Authorization'] = `Bearer ${token}`
    }
    return ret
}

const checkStatus = async (response: Response) => {
    if (response.status != 200) {
        throw await response.json() as ApiException
    }
}

const checkError = (json: any) => {
    const errors = json['error']
    var exception: ApiException
    if (errors) {
        const status = json['status']
        switch (status) {
            default:
                exception = {code: undefined, message: 'Unknown error'}
                break
        }
        throw exception
    }
}

export const getAPI = async ({url, headers, authorization}: GetPayload) => {
    console.log('url:', url)
    const response = await fetch(url, {
        method: 'GET',
        headers: authorization==false?headers:setHeaderAuthrization(headers),
    })
    await checkStatus(response)
    const json = await response.json()
    checkError(json)
    return json
}

const postAPI = async ({url, body, headers, authorization}: PostPayload) => {
    console.log('url:', url)
    const response = await fetch(url, {
        method: 'POST',
        headers: authorization==false?headers:setHeaderAuthrization(headers),
        body
    })
    await checkStatus(response)
    const json = await response.json()
    checkError(json)
    return json
}

async function axiosPost<T>(url: string, data: any, authentication?: boolean) {
    const token = store.getState().userReducer.user?.token
    const headers: any = {'Content-Type': 'application/json'}
    if (authentication != false && token) {
        headers['Authorization'] = `Bearer ${token}`
    }
    console.log('url:', url)
    const result = await axios.post<IApiResponse<T>>(url, data, {
        headers
    })
    if (result.data.success == false) {
        throw result.data
    }
    return result.data.data
}

async function axiosGet<T>(url: string, authentication?: boolean) {
    const token = store.getState().userReducer.user?.token
    const headers: any = {'Content-Type': 'application/json'}
    if (authentication != false && token) {
        headers['Authorization'] = `Bearer ${token}`
    }
    console.log('url:', url)
    const result = await axios.get<IApiResponse<T>>(url, {
        headers
    })
    if (result.data.success == false) {
        throw result.data
    }
    return result.data.data
}

async function axiosPut<T>(url: string, data?: any, authentication?: boolean) {
    const token = store.getState().userReducer.user?.token
    const headers: any = {'Content-Type': 'application/json'}
    if (authentication != false && token) {
        headers['Authorization'] = `Bearer ${token}`
    }
    console.log('url:', url)
    if (data) {
        console.log('payload:', data)
    }
    const result = await axios.put<IApiResponse<T>>(url, data, {
        headers
    })
    if (result.data.success == false) {
        throw result.data
    }
    return result.data.data
}

async function axiosMultiFormPost<T>(url: string, data: FormData, authentication?: boolean) {
    const token = store.getState().userReducer.user?.token
    console.log('url:', url)
    const headers: any = {
        Accept: '*/*',
        'Content-Type': 'multipart/form-data'}
    if (authentication != false && token) {
        headers['Authorization'] = `Bearer ${token}`
    }
    const result = await axios.post<IApiResponse<T>>(url, data, {
        headers
    })
    if (result.data.success == false) {
        throw result.data
    }
    return result.data.data
}

export interface ILoginPayload {
    email: string
    password: string
}

export function apiLogin({}: ILoginPayload) {
    if (enableSimulate) {
    } else {
        throw new Error("not implemented.")
        
    }    
}
