import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <TextInput
          placeholder="Usuario"
          placeholderTextColor="'rgba(255,255,255,0.2)'"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={username => this.setState({ username })}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="'rgba(255,255,255,0.2)'"
          returnKeyType="go"
          onChangeText={password => this.setState({ password })}
          secureTextEntry
          style={styles.input}
          ref={input => (this.passwordInput = input)}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.navigation.navigate("Tabs");
          }}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  }
});
