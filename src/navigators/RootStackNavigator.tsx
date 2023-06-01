import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
import { IRootState } from "reduxsaga/reducers"
import { SplashScreen } from "screens"
import { HomeStackNavigator } from "./HomeStackNavigator"
import { LoginStackNavigator } from "./LoginStackNavigator"

type RootStackParam = {
    splash: undefined
    mainStack: undefined
}

type MainStackParam = {
    loginStack: undefined
    homeStack: undefined
    emailConfirm: undefined
}

const RootStack = createNativeStackNavigator<RootStackParam>()
const MaintStack = createNativeStackNavigator<MainStackParam>()

export type RootStackScreenProps = NativeStackScreenProps<RootStackParam>

function MainstackNavigator() {
    const user = useSelector((state: IRootState)=>state.userReducer.user)
    return (
        <MaintStack.Navigator screenOptions={{headerShown: false}}>
        {
            !user
            ?
            <MaintStack.Screen name='loginStack' component={LoginStackNavigator}/>
            :
            <MaintStack.Screen name='homeStack' component={HomeStackNavigator}/>
        }
        </MaintStack.Navigator>
    )
}

export function RootStackNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Group screenOptions={{headerShown: false}}>
                <RootStack.Screen name='splash' component={SplashScreen}/>
                <RootStack.Screen name='mainStack' component={MainstackNavigator}/>
            </RootStack.Group>
        </RootStack.Navigator>
    )
}
