import React from "react"

export default async function getNodes(serverId: string) {
  try {
    const response = await fetch(`https://api.storjdash.com/servers/${serverId}/nodes`, {
      headers: {
        "X-API-Key": "524cfc8ee48b4d17ad936fd9ea1a0ee2",
        Accept: "application/hal+json",
      },
    })
    const responseJson = await response.json()
    return responseJson["_embedded"].nodes
  } catch (error) {
    console.error(error)
  }
}
