import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, Image, View, ImageStyle } from "react-native"
import { Screen, Text, Button, Header, Wallpaper, BottomLogo } from "../../components"
// import { useStores } from "../models/root-store"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import { useStores } from "../../models/root-store"
export interface DetailsScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

const BOLD: TextStyle = { fontWeight: "bold" }

const CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: "space-around",
  alignItems: "center"
}
const INNER_CONTAINER: ViewStyle = {
  width: 400,
  height: 600
}
const IMAGE_STYLE: ImageStyle = {
  flex: 1,
  height: undefined,
  width: undefined
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  marginBottom: 10,
  width: 300
}
export const DetailsScreen: React.FunctionComponent<DetailsScreenProps> = observer((props) => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  // const goHome = () => props.navigation.navigate("main")
  const { credential } = useStores()

  const deleteCred = () => {
    credential.removeMe()
    goBack()
  }

  const showDetails = () => {
    // rootStore.credential.remove()
    // goHome()
  }

  return (
    <Screen style={ROOT} preset="fixed">
      <Wallpaper />
      <Header
        headerTx="credScreen.title"
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <View style={CONTAINER}>
        <Text preset="header" text={credential ? credential.name : 'No credential selected'} />
        <View style={INNER_CONTAINER} >
          <Image
            style={IMAGE_STYLE}
            source={{ uri: credential.image }}
            resizeMode="contain"/>
        </View>
        <View>
          <Button style={BUTTON} text="Show Details" onPress={showDetails}/>
          <Button style={BUTTON} text="Delete Credential" onPress={deleteCred}/>
        </View>
      </View>
      <BottomLogo/>
    </Screen>
  )
})
