/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /**
  * ≤‚ ‘≤ºæ÷
  */
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <View style={styles.button} />
          <View style={styles.button} />
          <View style={styles.button} />
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>middle</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            <Text style={styles.text}>left</Text>
          </View>
          <View style={styles.bottomItem}>
            <Text style={styles.text}>right</Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  title: {
    flex: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor:'orange'
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bodyItem: {
    flex: 0,
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "orange",
    justifyContent: "center"
  },
  bottom: {
    flex: 0,
    height: 50,
    backgroundColor: "green",
    flexDirection: "row"
  },
  text: {
    fontSize: 30,
    color: "red",
    fontFamily: "bold"
  },
  button: {
    flex:1,
    height:50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#678',
    margin:2
  }
});
