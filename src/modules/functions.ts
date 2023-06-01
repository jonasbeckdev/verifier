import Toast from 'react-native-toast-message'
import { IApiException } from 'models'

export const handleException = (exception: any, cleanUp?: ()=>void) => {
    console.log('exception:', exception)
    if (exception instanceof Error) {
        Toast.show({type: 'error', text1: exception.message, onHide: cleanUp, onPress: cleanUp})
        return
    }
    if (typeof exception == 'string') {
        Toast.show({type: 'error', text1: exception as string})
        if (cleanUp) {
            cleanUp()
        }
        return
    }
    const apiException = exception as IApiException
    Toast.show({type: 'error', text1: apiException.message, text2: apiException.code, onHide: cleanUp, onPress: cleanUp})
}


export const checkEmailValidation = (email: string)=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    return reg.test(email)
}

export const checkDomainValidation = (domain: string)=>{
    let reg = /([a-z0-9-]+\.(?:com|net|org|co\.il))(?:\/|$)/
    return reg.test(domain)
}
