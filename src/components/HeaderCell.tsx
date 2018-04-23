import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface HeaderProps {
  section: object
}

interface State {
  tabBarSelection: number
}

export default class HeaderCell extends React.Component<HeaderProps, State> {
  constructor(props: HeaderProps) {
    super(props)
  }

  render() {
    return (
      <View
        style={[
          {
            backgroundColor: "#F7F7F7",
            justifyContent: "center",
            paddingLeft: 20,
            paddingTop: 4,
          },
        ]}
      >
        <Text style={[styles.value, { flex: 1, fontSize: 18, color: "#000000" }]}>{this.props.section.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  value: {
    fontFamily: "Louis George Cafe",
    fontWeight: "bold",
    fontSize: 19,
    color: "#FF9400",
  },
})
