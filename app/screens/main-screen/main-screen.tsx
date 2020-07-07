import * as React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle, SectionList, Image, ImageStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Button, Header, Text, Screen, Wallpaper, BottomLogo } from "../../components"
import { color, spacing } from "../../theme"
import { showAllKeys } from "../../utils/storage"
import { useStores } from "../../models/root-store"
import { TouchableOpacity } from "react-native-gesture-handler"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  marginBottom: 10
}
const BOLD: TextStyle = { fontWeight: "bold" }

const SECTION_HEADER: TextStyle = {
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 10,
  paddingRight: 10,
  fontSize: 22,
  fontWeight: 'bold',
  color: '#e6e6e6',
  backgroundColor: color.transparent,
}
const DEMO_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
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
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}

const CRED_ROW: ViewStyle = {
  flexDirection: 'row'
}
const CRED_NAME: TextStyle = {
  padding: 15,
  fontSize: 15
}
const INNER_CONTAINER: ViewStyle = {
  width: 60,
  height: 60
}
const IMAGE_STYLE: ImageStyle = {
  flex: 1,
  width: 60,
  height: 60
}

export interface MainScreenProps extends NavigationScreenProps<{}> {}

export const MainScreen: React.FunctionComponent<MainScreenProps> = observer(props => {
  // const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  var { setCredential } = useStores()
  const showAsyncStorageKeys = React.useMemo(
    () => async () => {
      console.tron.log("triggered call to show all keys")
      const allKeys = await showAllKeys()
      console.tron.log("all keys")
      console.tron.log(allKeys)
      // console.tron.log(showAsyncStore())
    },
    [],
  )

  const CredList = observer(() => {
    var sectionData = useStores().sectionListData().slice()
    return <SectionList
      scrollEnabled
      sections={sectionData}
    //return <FlatList
      //  data = {useStores().issuers.slice()}  // the slice is a hack to get mobx observer to react to changes to the credentials
      renderItem = {({ item }) => (
        <TouchableOpacity
          style={CRED_ROW}
          onPress={() => {
            setCredential(item)
            props.navigation.navigate("details")
          }}
        >
          <View style={INNER_CONTAINER} >
            <Image
              style={IMAGE_STYLE}
              source={{ uri: item.image }}
              resizeMode="contain"/>
          </View>
          <Text style={CRED_NAME}>{item.name}</Text>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={SECTION_HEADER}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  })

  return (
    <View style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <Header
          headerTx="demoScreen.howTo"
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <Text style={TITLE} preset="header" tx="demoScreen.title" />

        <CredList/>

      </Screen>
      <View>
        <Button
          style={BUTTON}
          textStyle={DEMO_TEXT}
          tx="demoScreen.getVCButton"
          onPress={() => props.navigation.navigate("import")}
        />
      </View>
      <View>
        <Button
          style={BUTTON}
          textStyle={DEMO_TEXT}
          tx="demoScreen.showKeys"
          onPress={showAsyncStorageKeys}
        />
      </View>
      <BottomLogo/>
    </View>
  )
})
