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
        <View style={styles.firstRow}>
          <View style={styles.test1} />
          <Text style={styles.textStyle}>ABC</Text>

          <View style={styles.test2} />
          <View style={styles.test3} />
          <View style={styles.test3} />
        </View>

        <View style={styles.testPosttion} />

        <View style={styles.testPosttion2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column"
  },
  firstRow: {
    height: 100,
    top: 100,
    backgroundColor: "gray",
    flexDirection: "row",
    // alignItems:'center',
    alignItems: "stretch",
    justifyContent: "space-around",
    flexWrap: "nowrap"
  },
  test1: {
    width: 60,
    height: 24,
    backgroundColor: "green"
  },
  test2: {
    width: 50,
    height: 30,
    backgroundColor: "blue"
  },
  test3: {
    marginLeft: 10,
    width: 80,
    height: 28,
    backgroundColor: "red"
  },
  test4: {
    width: 70,
    height: 24,
    backgroundColor: "green"
  },

  textStyle: {
    fontSize: 18,
    color: "white",
    backgroundColor: "pink"
  },

  testPosttion: {
    backgroundColor: "orange",
    top: 100,
    left: 50,
    height: 100,
    width: 100,
    position: "relative"
  },

  testPosttion2: {
    backgroundColor: "red",
    top: 100,
    height: 10,
    width: 10,
    position: "relative"
  }

  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
