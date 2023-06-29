
// import React, { FC } from "react"
// import { useStores } from "app/models"
// import { ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import React, { useState, useCallback, FC } from "react";
import { ViewStyle, Alert, SafeAreaView, FlatList } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { spacing } from "../theme"
import videoData from '../services/api/tempApi.json'
interface VideoPreviewScreenProps extends NativeStackScreenProps<AppStackScreenProps<"VideoPreview">> { }
export const VideoPreviewScreen: FC<VideoPreviewScreenProps> = observer(function VideoPreviewScreen() {
  // Pull in one of our MST (mobx state tree) stores 
  // const { someStore, anotherStore } = useStores()

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);


  function shuffle(array) {
    let currentIndex = array.length; let randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  shuffle(videoData);

  const randomVideo = [videoData[Math.floor(Math.random() * videoData.length)]];
  const [refreshing, setRefreshing] = React.useState(false);

  async function manualRefresh() {
    setRefreshing(true)
    await setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    setRefreshing(false)
  }

  return (
    <Screen style={$root}>


      <Text style={$title}> VideoPlayer</Text>
      <SafeAreaView  >
        <FlatList
          refreshing={refreshing}
          onRefresh={manualRefresh}
          data={randomVideo}
          renderItem={({ item }) => <YoutubePlayer
            height={300}
            play={playing}
            videoId={item.id}
            onChangeState={onStateChange}

          />}>

        </FlatList>
        {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
      </SafeAreaView></Screen>
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
