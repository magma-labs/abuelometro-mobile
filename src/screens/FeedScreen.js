import React, { Component } from "react";
import { ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import { allgrandpas } from "../utils/newdata";

export default class FeedScreen extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          {allgrandpas.map(grandpa => (
            <ListItem
              key={grandpa.id}
              roundAvatar
              avatar={require("../assets/icons/abuelo.png")}
              title={`${grandpa.first_name.toUpperCase()} ${grandpa.second_name.toUpperCase()}`}
              onPress={() =>
                this.props.navigation.navigate("grandpaDetail", { ...grandpa })
              }
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
