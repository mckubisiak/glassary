import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import YoutubePlayer from "react-native-youtube-iframe";
import React from "react"



export interface video {
  /**
   * An optional style override useful for padding & margin.
   */
  title: string
  id: string
}
export interface YoutubeIframeProps {
  /**
   * An optional style override useful for padding & margin.
   */
  data: video
  style?: StyleProp<ViewStyle>
}



// /**
//  * Describe your component here
//  */function shuffle(array) {
//   let currentIndex = array.length; let randomIndex;
//   // While there remain elements to shuffle.
//   while (currentIndex !== 0) {
//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }
// shuffle(data);

export const YoutubeIframe = observer(function YoutubeIframe(props: YoutubeIframeProps) {
  const { data, style } = props

  const $styles = [$container, style]




  return (
    <View style={$styles}>
      <Text style={$text} text={data.title} /><YoutubePlayer
        height={300}
        videoId={data.id}

      />


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
