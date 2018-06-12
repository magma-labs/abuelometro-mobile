import React, { Component } from "react";
import { ScrollView, View, Button, Text } from "react-native";
import { Tile, List, ListItem } from "react-native-elements";
import PureChart from "react-native-pure-chart";
import moment from "moment";

export default class GrandpaDetail extends Component {
  constructor(props) {
    super(props);
    this.generateData = this.generateData.bind(this);
    this.state = {
      data: []
    };
  }

  ComponentDidMount() {
    this.generateData();
  }

  generateData() {
    var data = [];
    var data2 = [];
    var data3 = [];
    var pieData = [];
    var startDate = moment();
    for (var i = 0; i < 10; i++) {
      startDate.add(1, "days");
      data.push({
        x: startDate.format("YYYY-MM-DD"),
        y: Math.round(Math.random() * 500)
      });
      data2.push({
        x: startDate.format("YYYY-MM-DD"),
        y: Math.round(Math.random() * 50) + 0.5
      });
      data3.push({
        x: startDate.format("YYYY-MM-DD"),
        y: Math.round(Math.random() * 1000)
      });
    }

    for (let i = 0; i < 5; i++) {
      pieData.push({
        value: Math.round(Math.random() * 500),
        label: "Marketing"
      });
    }

    this.setState({
      data: [{ seriesName: "test2", data: data2, color: "#0e95de" }],
      pieData: pieData
    });
  }

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

        <View style={{ padding: 20 }}>
          <PureChart type={"line"} data={this.state.data} />
          <Button
            style={{ marginTop: 20 }}
            title="Generate chart data"
            onPress={this.generateData}
          >
            <Text>Generate chart data</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}
