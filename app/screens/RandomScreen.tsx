
// import { useStores } from "app/models"
import { observer } from "mobx-react-lite"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, YoutubeIframe } from "app/components"
import React, { FC } from "react";
import { ViewStyle, RefreshControl } from "react-native";
import { spacing } from "../theme"
import * as reactNativeGestureHandler from "react-native-gesture-handler";

const videoData  = require('../services/api/tempApi.json')


interface RandomScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Random">> { }
export const RandomScreen: FC<RandomScreenProps> = observer(function RandomScreen() {
  // Pull in one of our MST (mobx state tree) stores 
  // const { someStore, anotherStore } = useStores()
  const randomVideo: [{title: string, id: string}] = [videoData[Math.floor(Math.random() * videoData.length)]];
  const [refreshing, setRefreshing] = React.useState(false);

  async function onRefresh() {
    setRefreshing(true)
    await setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    setRefreshing(false)
  }

  return (
    <Screen style={$text}>

      <Text style={$title}> Pull down to load a random demo.</Text>
      <reactNativeGestureHandler.ScrollView   refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        } >
<YoutubeIframe data={randomVideo[0]}></YoutubeIframe>
              </reactNativeGestureHandler.ScrollView></Screen>
  );
})

const $text: ViewStyle = {
  flex: 1,
  paddingTop: spacing.tiny,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.small,
}

const $title: ViewStyle = {
  alignSelf: 'center',
} 
