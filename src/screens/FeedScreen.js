import React, { Component } from "react";
import { ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import { users } from "../utils/data";

export default class FeedScreen extends Component {
  onLearnMore = user => {
    this.props.navigation.navigate("grandpaDetail", { ...user });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {users.map(user => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
