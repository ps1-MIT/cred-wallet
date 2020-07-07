import * as React from "react"
import { Image, ImageStyle } from "react-native"
import { spacing } from "../../theme"
export const macEngLogo = require("./macEng.png")

const LOGO: ImageStyle = {
    marginVertical: spacing[6],
    alignSelf: "center",
  }
/**
 * Bottom logo that appears on many screens.
 */
export const BottomLogo: React.FunctionComponent<any> = props => {
  return (
    <Image source={macEngLogo} style={LOGO} />
    
  )
}
