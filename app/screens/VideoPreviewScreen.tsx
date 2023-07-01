
// import React, { FC } from "react"
// import { useStores } from "app/models"
// import { ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, YoutubeIframe } from "app/components"
import React, { useState, useCallback, FC } from "react";
import { ViewStyle, Alert, View } from "react-native";
import { spacing } from "../theme"
import videoData from '../services/api/tempApi.json'

import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"


interface VideoPreviewScreenProps extends NativeStackScreenProps<AppStackScreenProps<"VideoPreview">> { }
export const VideoPreviewScreen: FC<VideoPreviewScreenProps> = observer(function VideoPreviewScreen() {
  // Pull in one of our MST (mobx state tree) stores 
  // const { someStore, anotherStore } = useStores()
  

  return (
    <Screen style={$root}>

<YoutubeIframe></YoutubeIframe>
      <Text style={$title}> VideoPlayer</Text>
      <View  >
              </View></Screen>
  );
})

const $root: ViewStyle = {
  flex: 1,
  paddingTop: spacing.large + spacing.extraLarge,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.small,
}

const $title: ViewStyle = {
  alignSelf: 'center',
} 
