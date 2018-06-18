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
        <View style={styles.vs} />
        <View style={styles.vs2} />
        <View style={styles.vs} />
        <View style={styles.vs1} />
        <View style={styles.vs} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    height:400,

  },
  vs: {
    height: 50,
    backgroundColor: "gray"
  },
  vs1:{
    flex:1,          
    height:50,
    backgroundColor:'green'
  },
  vs2:{
    flex:2,
    height:50,
    backgroundColor:'green'
  }
  border1:{
    borderWidth:1,

  }
});
