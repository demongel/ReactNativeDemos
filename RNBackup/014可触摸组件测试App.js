/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("green", false)}
        >
          <View style={styles.button} />
        </TouchableNativeFeedback>
        <TouchableHighlight  onPress={()=>{}}>
          <View style={styles.button2} />
        </TouchableHighlight>
        <TouchableOpacity>
          <View style={styles.button} />
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    alignItems: "center"
  },
  button: {
    marginTop: 5,
    height: 50,
    width: 200,
    justifyContent: "center",
    backgroundColor: "red",
  },
  button2: {
    marginTop: 5,
    height: 50,
    width: 100,
    backgroundColor: "gray",
  }
});
