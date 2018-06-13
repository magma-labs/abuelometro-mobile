import React, { Component } from "react";
import { ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import { allgrandpas } from "../utils/newdata";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postToGetGranpaList } from "../state/actions/index.js";

class FeedScreen extends Component {
  async componentWillMount() {
    await this.props.postToGetGranpaList();
  }
  render() {
    return (
      <ScrollView>
        <List>
          {this.props.GrandpaArray.map(grandpa => (
            <ListItem
              key={grandpa.id}
              roundAvatar
              avatar={require("../assets/icons/abuelo.png")}
              title={`${grandpa.first_name.toUpperCase()} ${grandpa.last_name.toUpperCase()}`}
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

function mapStateToProps(state) {
  const { glucoseStatus, GrandpaArray } = state.reducers;
  return {
    glucoseStatus,
    GrandpaArray
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { postToGetGranpaList: postToGetGranpaList },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(FeedScreen);
