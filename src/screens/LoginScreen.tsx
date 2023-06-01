import React from "react"
import { Text, View } from "react-native"
import { useTranslation } from 'react-i18next'
import en from 'dist/en.json'
import { appStyles } from "assets"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Logo } from "components"

export const LoginScreen = () => {
    const { t, i18n } = useTranslation()
    const {top, bottom} = useSafeAreaInsets()
	return (
        <View style={[appStyles.container, {marginTop: top?top:16, marginBottom: bottom?bottom:16}]}>
            <View style={appStyles.center}>
                <Logo/>
                <Text>{t(en["Hello world"])}</Text>
            </View>
        </View>
    )
}