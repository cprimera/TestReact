import React from "react"
import { Alert, SectionList, StyleSheet } from "react-native"
import getServers from "../network/server"
import HeaderCell from "./HeaderCell"
import OverviewCell from "./OverviewCell"
import ServerCell from "./ServerCell"

interface State {
  servers: object
}

export default class MainTable extends React.Component<State> {
  constructor() {
    super()

    this.state = { servers: [], overview: [] }
  }

  componentDidMount() {
    getServers().then(response => {
      let servers = response.map((server, index) => {
        return { ...server, key: server["_id"] }
      })
      let overview = [
        {
          key: "1",
          activeNodes: response.reduce((total, server) => {
            return total + server["active_nodes"]
          }, 0),
          stored: response.reduce((total, server) => {
            return total + server["stored_bytes"]
          }, 0),
          increased: response.reduce((total, server) => {
            return total + server["increase_bytes"]
          }, 0),
          totalCapacity: response.reduce((total, server) => {
            return total + server["capacity_bytes"]
          }, 0),
        },
      ]
      this.setState(previousState => {
        return {
          ...previousState,
          servers: response,
          overview: overview,
        }
      })
    })
  }

  render() {
    return (
      <SectionList
        style={styles.view}
        renderSectionHeader={({ section }) => <HeaderCell section={section} navigation={this.props.navigation} />}
        sections={[
          {
            data: this.state.overview,
            title: "Overview",
            renderItem: ({ item, separators }) => <OverviewCell data={item} navigation={this.props.navigation} />,
          },
          {
            data: this.state.servers,
            title: "Servers",
            renderItem: ({ item, separators }) => <ServerCell data={item} navigation={this.props.navigation} />,
          },
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  view: {},
})
