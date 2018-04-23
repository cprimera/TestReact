import React from "react"
import {
  Alert,
  Button,
  NavigatorIOS,
  Platform,
  SafeAreaView,
  SectionList,
  StyleSheet,
  TabBarIOS,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { StackNavigator } from "react-navigation"
import DetailTable from "./src/components/DetailTable"
import MainTable from "./src/components/MainTable"

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu",
})

interface State {
  servers: any[]
}
const App = StackNavigator({
  Overview: { screen: MainTable },
  Detail: { screen: DetailTable },
})

export default App

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
