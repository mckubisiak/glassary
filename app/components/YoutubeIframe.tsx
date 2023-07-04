import { Alert, FlatList, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import YoutubePlayer from "react-native-youtube-iframe";
import React, { useCallback, useState } from "react"

import videoData from '../services/api/tempApi.json'
export interface YoutubeIframeProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */function shuffle(array) {
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

export const YoutubeIframe = observer(function YoutubeIframe(props: YoutubeIframeProps) {
  const randomVideo = [videoData[Math.floor(Math.random() * videoData.length)]];
  const { style } = props
  const $styles = [$container, style]
  const [playing, setPlaying] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  async function manualRefresh() {
    setRefreshing(true)
    await setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    setRefreshing(false)
  }
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  
  return (
    <View style={$styles}>
      <Text style={$text}></Text>
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
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
