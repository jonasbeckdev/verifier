import { createNativeStackNavigator, NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { TabNavigator } from "navigators"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

type HomeStackParam = {
    tab: undefined
}

const HomeStack = createNativeStackNavigator<HomeStackParam>()
export type HomeStackProps = NativeStackScreenProps<HomeStackParam>
export type HomeStackNavProps = NativeStackNavigationProp<HomeStackParam>

export function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{headerShown: false}} name='tab' component={TabNavigator}/>
        </HomeStack.Navigator>
    )
}
