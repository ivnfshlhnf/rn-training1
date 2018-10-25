import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
    // console.log("this called")
  };
  render() {
    return (
      <View>
        <Text> AUTH </Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default AuthScreen;
