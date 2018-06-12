import React, { Component } from "react";
import { ScrollView } from "react-native";
import { List, ListItem, FormLabel, FormInput } from "react-native-elements";

export default class UserPersonalData extends Component {
  render() {
    const { first, last } = this.props.navigation.state.params.name;
    return (
      <ScrollView>
        <FormLabel>Nombre:</FormLabel>
        <FormInput
          editable={false}
          placeholder={`${first.toUpperCase()} ${last.toUpperCase()}`}
        />
        <FormLabel>Altura:</FormLabel>
        <FormInput editable={false} placeholder={"1.70"} />
        <FormLabel>Peso:</FormLabel>
        <FormInput editable={false} placeholder={"80"} />
        <FormLabel>Edad</FormLabel>
        <FormInput editable={false} placeholder={"98"} />
        <FormLabel>Tipo de Sangre:</FormLabel>
        <FormInput editable={false} placeholder={"O RH+"} />
        <List>
          <ListItem title="Familiar responsable" />
          <ListItem title="Historial Médico" />
        </List>
      </ScrollView>
    );
  }
}
