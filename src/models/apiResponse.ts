export interface IApiException {
    url: string
    code: string | undefined
    message: string
}

export interface IApiResponse<T> {
    success: boolean
    status_code?: number
    message: string
    data: T
}
