import React from "react"
import { Alert, SectionList, StyleSheet } from "react-native"
import getNodes from "../network/node"
import HeaderCell from "./HeaderCell"
import OverviewCell from "./OverviewCell"
import ServerCell from "./ServerCell"

interface State {
  servers: object
}

export default class DetailTable extends React.Component<State> {
  constructor() {
    super()

    this.state = { servers: [], overview: [] }
  }

  componentDidMount() {
    const { params } = this.props.navigation.state
    getNodes(params.server["_id"]).then(response => {
      let nodes = response.map((node, index) => {
        return { ...node, key: node["_id"] }
      })
      this.setState(previousState => {
        return {
          ...previousState,
          servers: response,
        }
      })
    })
    let overview = [
      {
        key: "1",
        activeNodes: params.server["active_nodes"],
        stored: params.server["stored_bytes"],
        increased: params.server["increase_bytes"],
        totalCapacity: params.server["capacity_bytes"],
      },
    ]

    this.setState(previousState => {
      return {
        ...previousState,
        overview: overview,
      }
    })
  }

  render() {
    return (
      <SectionList
        style={styles.view}
        renderSectionHeader={({ section }) => <HeaderCell section={section} />}
        sections={[
          {
            data: this.state.overview,
            title: "Server",
            renderItem: ({ item, separators }) => <OverviewCell data={item} />,
          },
          {
            data: this.state.servers,
            title: "Nodes",
            renderItem: ({ item, separators }) => <ServerCell data={item} />,
          },
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  view: {},
})
