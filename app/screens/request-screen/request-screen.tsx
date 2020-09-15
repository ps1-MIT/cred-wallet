import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, TouchableOpacity, Text } from "react-native"
import { Screen, Header, Wallpaper, BottomLogo, Button } from "../../components"
import { color, spacing } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import QRCodeScanner from "react-native-qrcode-scanner"
// import { RNCamera } from 'react-native-camera'
import { ScrollView } from "react-native-gesture-handler"

export interface RequestScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

const BOLD: TextStyle = { fontWeight: "bold", color: '#000' }

const CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: "space-around",
  alignItems: "center"
}
const INNER_CONTAINER: ViewStyle = {
  width: 400,
  height: 600
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
const CENTER_TEXT: TextStyle = {
  flex: 1,
  fontSize: 18,
  padding: 32,
  color: '#777'
}
const BUTTON_TEXT: TextStyle = {
  fontSize: 21,
  color: 'rgb(0,122,255)'
}
const BUTTON_TOUCHABLE: ViewStyle = {
  padding: 16
}

const BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  marginBottom: 10,
  width: 300
}

export const RequestScreen: React.FunctionComponent<RequestScreenProps> = observer((props) => {
  const [url, setURL] = React.useState('')
  const [credential, setCredential] = React.useState({})
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  const did = { subjectDid: "did:example:123" }

  const getCredential = async (url, body) => {
    console.tron.log("about to request the cred from the server")
    // curl --header "Content-Type: application/json" --request POST --data '{"subjectDid": "did:example:123"}' https://sign-and-verify.herokuapp.com/request/credentials
    const response = await fetch('https://sign-and-verify.herokuapp.com/request/credentials', {
      method: 'POST',
      body: '{"subjectDid": "did:example:123"}', // JSON.stringify(did),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const cred = await response.json()
    setCredential(cred)
    console.tron.log("the cred from the server")
    console.tron.log(cred)
  }

  const onSuccess = e => {
    setURL(e.data)
  }

  const requestCredential = () => { getCredential(url, did) }
  const clear = () => { // somehow reset the QRCodeScanner
  }

  return (
    <Screen style={ROOT} preset="fixed">
      <Wallpaper />
      <Header
        headerTx="requestScreen.title"
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <View style={CONTAINER}>
        <View style={INNER_CONTAINER} >
          {credential ?
            <ScrollView>
              <Text style={BOLD}>{JSON.stringify(credential)}</Text>
            </ScrollView>
            : <QRCodeScanner
              onRead={onSuccess}
            //flashMode={RNCamera.Constants.FlashMode.torch}
              topContent={
                <Text style={CENTER_TEXT}>
                  <Text style={BOLD}>Scanned URL: {url}</Text>
                </Text>
              }
              bottomContent={
                <TouchableOpacity style={BUTTON_TOUCHABLE}>
                  <Text style={BUTTON_TEXT}>OK. Got it!</Text>
                </TouchableOpacity>
              }
            />}
        </View>
        <View>
          <Button style={BUTTON} text="Request your credential" onPress={requestCredential}/>
          <Button style={BUTTON} text="Scan New QR" onPress={clear}/>
        </View>
      </View>
      <BottomLogo/>
    </Screen>
  )
})
