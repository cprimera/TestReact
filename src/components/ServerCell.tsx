import React from "react"
import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import CircleView from "./CircleView"

interface CellProps {
  data: object
}

interface State {
  tabBarSelection: number
}

export default class ServerCell extends React.Component<CellProps, State> {
  constructor(props: CellProps) {
    super(props)
  }

  doSomething() {
    Alert.alert("Some title", "Some message")
  }

  render() {
    const { navigate } = this.props.navigation !== undefined ? this.props.navigation : { navigate: null }
    return (
      <TouchableHighlight
        onPress={() => {
          if (navigate !== null) {
            navigate("Detail", { server: this.props.data })
          }
        }}
      >
        <View style={[styles.container, styles.cell]}>
          <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.label}>
              {this.props.data.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#FFF",
            }}
          >
            <CircleView
              style={{ height: 130, width: 130, backgroundColor: "#FFF" }}
              percentage={this.props.data["stored_bytes"] / this.props.data["capacity_bytes"]}
            />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontFamily: "Louis George Cafe Light",
    fontSize: 19,
  },
  cell: {
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 200,
  },
})
