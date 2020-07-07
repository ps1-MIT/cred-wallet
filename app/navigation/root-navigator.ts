import { createStackNavigator } from "react-navigation"
import { PrimaryNavigator } from "./primary-navigator"
import {
  MainScreen,
} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars


export const RootNavigator = createStackNavigator(
  {
    mainScreen: { screen: MainScreen },
    primaryStack: { screen: PrimaryNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
