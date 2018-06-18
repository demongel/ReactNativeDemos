/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vs} opacity={0.1}>
          <Text >AjFg 你好</Text>
        </View>
        <View style={styles.vs} opacity={0.2} />
        <View style={styles.vs} opacity={0.25} />
        <View style={styles.vs} opacity={0.5} />
        <View style={styles.vs} opacity={0.75} />
        <View style={styles.vs} opacity={1} />
        <View style={styles.vs} opacity={5} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    alignItems: "center"
  },
  vs: {
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor:'green',
    elevation:50,
  },
  text:{
    overflow:'visible',

  }
});
