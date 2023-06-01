import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { LoginScreen } from "screens"

type LoginStackParam = {
    login: undefined
}

const LoginStack = createNativeStackNavigator<LoginStackParam>()

export type LoginStackScreenProps = NativeStackScreenProps<LoginStackParam>

export function LoginStackNavigator() {
    return (
        <LoginStack.Navigator screenOptions={{headerShown: false}}>
            <LoginStack.Screen name='login' component={LoginScreen}/>
        </LoginStack.Navigator>
    )
}
