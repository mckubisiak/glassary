
import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import {
  VideoPreviewScreen, WelcomeScreen,
} from "app/screens"
import { colors, spacing } from "app/theme"
import { ViewStyle } from "react-native"

export type ContentNavigatorParamList = {
  Demo: undefined
  VideoPreview: undefined
}

const Tab = createMaterialTopTabNavigator<ContentNavigatorParamList>()
export const ContentNavigator = () => {
  return (
    <Tab.Navigator style={$container}
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12, color: colors.text },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: {  
        backgroundColor: colors.background,
        borderTopColor: colors.transparent, 
        
      },
    }}>
      <Tab.Screen name="VideoPreview" component={VideoPreviewScreen} />
      <Tab.Screen name="Demo" component={WelcomeScreen} />
    </Tab.Navigator>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  marginTop: spacing.extraLarge
}