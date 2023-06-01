import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import React from "react"
import rootSaga from 'reduxsaga/saga'
import {store, sagaMiddleware} from 'reduxsaga/store'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import Toast, { ErrorToast, SuccessToast } from "react-native-toast-message"
import {LogBox} from 'react-native'
import { RootStackNavigator } from "navigators"
import { appColors } from "assets"

sagaMiddleware.run(rootSaga)

LogBox.ignoreLogs([
    'react-i18next:: You will need to pass in an i18next instance by using initReactI18next'
])

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: appColors.main
    }
}

export default () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistStore(store)}>
                <NavigationContainer theme={MyTheme}>
                    <RootStackNavigator/>
                </NavigationContainer>
            </PersistGate>
            <Toast
          config={{
            error: params=>{
                return (
                    <ErrorToast
                        text1NumberOfLines={10}
                        {...params}
                        text1Style={{
                        }}
                        text2Style={{
                        }}
                    />
                )
            },
            success: params=>{
                return (
                    <SuccessToast
                        {...params}
                        text1NumberOfLines={10}
                        text1Style={{
                        }}
                        text2Style={{
                        }}
                    />
                )
            }
        }}
        position='bottom'
        />
        </Provider>
    )
}
