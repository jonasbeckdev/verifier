import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackScreenProps } from 'navigators'

export function SplashScreen({navigation}: RootStackScreenProps) {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('mainStack')
        }, 2000)
    }, [])
    return (
        <View style={{flex: 1}}>
            <StatusBar hidden={true}/>
        </View>
    )
}

const styles = StyleSheet.create({})