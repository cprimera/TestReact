import React from "react"
import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native"

interface CellProps {
  data: object
}

interface State {
  tabBarSelection: number
}

export default class OverviewCell extends React.Component<CellProps, State> {
  constructor(props: CellProps) {
    super(props)
  }

  doSomething() {
    Alert.alert("Some title", "Some message")
  }

  render() {
    return (
      <TouchableHighlight onPress={this.doSomething}>
        <View style={[styles.container, styles.cell, { justifyContent: "space-between" }]}>
          <View>
            <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
              <Text style={styles.value}>{this.props.data.activeNodes}</Text>
              <Text style={styles.value}>{(this.props.data.stored / Math.pow(1024, 3)).toFixed(2)} GB</Text>
            </View>

            <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
              <Text style={styles.label}>Active Nodes</Text>
              <Text style={styles.label}>Stored</Text>
            </View>
          </View>

          <View>
            <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
              <Text style={styles.value}>{(this.props.data.increased / Math.pow(1024, 2)).toFixed(2)} MB</Text>
              <Text style={styles.value}>{(this.props.data.totalCapacity / Math.pow(1024, 3)).toFixed(2)} GB</Text>
            </View>

            <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
              <Text style={styles.label}>Increased</Text>
              <Text style={styles.label}>Total Capacity</Text>
            </View>
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
  value: {
    fontFamily: "Louis George Cafe",
    fontWeight: "bold",
    fontSize: 19,
    color: "#FF9400",
  },
  cell: {
    padding: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 150,
  },
})
