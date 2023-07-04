
// import { useStores } from "app/models"
import { observer } from "mobx-react-lite"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, YoutubeIframe } from "app/components"
import React, { FC } from "react";
import { ViewStyle, View } from "react-native";
import { spacing } from "../theme"



interface RandomScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Random">> { }
export const RandomScreen: FC<RandomScreenProps> = observer(function RandomScreen() {
  // Pull in one of our MST (mobx state tree) stores 
  // const { someStore, anotherStore } = useStores()
  

  return (
    <Screen style={$root}>

      <Text style={$title}> Pull down to load a random demo.</Text>
      <View  >
<YoutubeIframe></YoutubeIframe>
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
