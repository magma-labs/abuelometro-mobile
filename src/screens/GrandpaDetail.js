import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Tile, List, ListItem } from "react-native-elements";

export default class GrandpaDetail extends Component {
  render() {
    const { picture, name } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large }}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
        />

        <List>
          <ListItem
            title="Presion Arterial"
            rightTitle={"120"}
            roundAvatar
            avatar={{ uri: picture.thumbnail }}
          />
        </List>
      </ScrollView>
    );
  }
}
