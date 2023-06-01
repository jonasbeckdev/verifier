import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

type TabStackParam = {
}

const Tab = createBottomTabNavigator<TabStackParam>()

export function TabNavigator() {
    return (
        <Tab.Navigator>
        </Tab.Navigator>
    )
}

