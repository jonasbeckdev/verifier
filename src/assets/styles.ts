import { designHeight, designWidth } from "modules/constants";
import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import { appColors } from "./colors";
import { fonts } from "./fonts";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const windowsFontScale = Dimensions.get('window').fontScale

export const WIDTH = (w: number)=>{
    return (windowWidth/designWidth)*w
}

export const FONT = (f: number)=>{
    return ((windowHeight)/(designHeight))*f/windowsFontScale
}

export const HEIGHT = (h: number)=>{
    if (Platform.OS == 'ios') {
        return ((windowHeight)/(designHeight))*h
        // return ((windowHeight-insets.bottom-insets.top)/designHeight)*h
        // return ((windowHeight-insets.top)/designHeight)*h
    }
    return (windowHeight-(StatusBar.currentHeight?StatusBar.currentHeight:40))/designHeight*h
}

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.background
    },
    center: {
        alignItems: 'center', justifyContent: 'center'
    },
    rowCenter: {
        flexDirection: 'row', alignItems: 'center'
    },
    absolute: {
        position: 'absolute', top: 0, left: 0, bottom: 0, right: 0
    },
})
