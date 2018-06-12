import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import NumericInput, { calcSize } from "react-native-numeric-input";
import { Button, Text } from "react-native-elements";

export default class IntroduceData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 80
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/icons/hospital.png")}
          style={styles.diabetesIcon}
        />
        <NumericInput
          value={this.state.value}
          onChange={value => this.setState({ value: value })}
          totalWidth={calcSize(400)}
          totalHeight={calcSize(150)}
          rounded
          textColor="#103900"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="#1E5BA9"
          leftButtonBackgroundColor="#1E5BA9"
        />

        <Text h4>mg/dl</Text>

        <Button
          raised
          title="Guardar"
          backgroundColor="#6C819B"
          buttonStyle={{ marginTop: 50 }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  diabetesIcon: {
    width: 100,
    height: 100,
    marginBottom: 50,
    marginTop: 25
  }
});
