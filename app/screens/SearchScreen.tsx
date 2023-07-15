
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, TextField } from "app/components"
import { colors, spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SearchScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Search">> {}

export const SearchScreen: FC<SearchScreenProps> = observer(function SearchScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [input, setInput] = useState("")
  
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="△◄ ▲ ▼ ► ◣ ◥ ◤ ◢ ◂ ▴" />
<TextField
  value={input}
  onChangeText={(value) => setInput(value)}
  status="error"
  label="Search"
  // labelTx="login.nameLabel"
  labelTxOptions={{ search: "wigwag" }}
  LabelTextProps={{ style: { color: colors.palette.primary600  } }}
  placeholder="wigwag"
  // placeholderTx="login.namePlaceholder"
  placeholderTxOptions={{ search: "wigwag" }}
  helper="Search for a demo or tutorial video"
  // helperTx="login.nameHelper"
  helperTxOptions={{ search: "wigwag" }}
  HelperTextProps={{ style: { color: colors.palette.primary600 } }}
  style={$back}
  containerStyle={$back}
  inputWrapperStyle={$back}
  // RightAccessory={() => <Icon icon="check" />}
  // LeftAccessory={() => <Icon icon="bell" />}
/>

    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
const $back: ViewStyle = {
  backgroundColor: colors.background,
  paddingLeft: spacing.large,
  paddingRight: spacing.large
}

