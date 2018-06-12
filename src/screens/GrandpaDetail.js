import React, { Component } from "react";
import { ScrollView, View, Button, Text } from "react-native";
import { Tile, List, ListItem } from "react-native-elements";
import PureChart from "react-native-pure-chart";
import moment from "moment";

export default class GrandpaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hideChartButton: false
    };
  }

  generateData = () => {
    var data = [];
    var data2 = [];
    var data3 = [];
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

    this.setState({
      data: [{ seriesName: "test2", data: data2, color: "#0e95de" }],
      hideChartButton: true
    });
  };

  render() {
    const { picture, name } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large }}
          onPress={() => {
            this.props.navigation.navigate("userPersonalData", {
              ...this.props.navigation.state.params
            });
          }}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
        />

        <List>
          <ListItem
            title="Presion Arterial"
            rightTitle={"120"}
            roundAvatar
            avatar={{ uri: picture.thumbnail }}
            onPress={() => this.props.navigation.navigate("introduceData")}
          />
        </List>

        <View style={{ padding: 20 }}>
          <PureChart type={"line"} data={this.state.data} />
          {this.state.hideChartButton ? (
            <View />
          ) : (
            <Button
              style={{ marginTop: 20 }}
              title="Generar gráfica"
              onPress={() => {
                this.generateData();
              }}
            >
              <Text>Generar gráfica</Text>
            </Button>
          )}
        </View>
      </ScrollView>
    );
  }
}
