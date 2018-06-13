import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { cuidador, familiar } from "../utils/newdata";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postLoginData } from "../state/actions/index.js";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  sendData = () => {
    if (
      this.state.email == cuidador.email &&
      this.state.password == cuidador.password
    ) {
      this.props.navigation.navigate("Tabs");
    } else if (
      this.state.email == familiar.email &&
      this.state.password == familiar.password
    ) {
      this.props.navigation.navigate("RelativeFlow");
    } else {
      Alert.alert(
        "Los datos del Usuario o Contraseña son incorrectos",
        "Por favor introduce datos que sean validos",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <TextInput
          placeholder="Usuario"
          placeholderTextColor="'rgba(255,255,255,0.2)'"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={email => this.setState({ email })}
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
          onPress={this.sendData}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      postLoginData: postLoginData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(LoginForm);

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
