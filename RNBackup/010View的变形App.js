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
        <Text style={styles.text0}> Hello World 不指定旋转</Text>
        <Text style={styles.text1}> Hello World X旋转</Text>
        <Text style={styles.text2}> Hello World Y旋转</Text>
        <Text style={styles.text3}> Hello World Z旋转</Text>
        <Text style={styles.text4}> Hello World 放大</Text>
        <Text style={styles.text5}> Hello World X放大</Text>
        <Text style={styles.text6}> Hello World Y放大</Text>
        <Text style={styles.text7}> Hello World X平移</Text>
        <Text style={styles.text8}> Hello World Y平移</Text>
        <Text style={styles.text9}> Hello World X倾斜</Text>
        <Text style={styles.text10}> Hello World Y倾斜</Text>
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
  text0: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }]
  },
  text1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotateX: '180deg' }]  // 屏幕的宽度方向旋转
  },
  text2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotateY: "180deg" }] // 屏幕的高方向旋转
  },
  text3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotateZ: "180deg" }]  // 一垂直屏幕的z轴旋转
  },
  text4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 2 }]
  },
  text5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scaleX: 2 }]
  },
  text6: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scaleY: 2 }]
  },
  text7: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 100 }]
  },
  text8: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: 100 }]
  },
  text9: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    transform: [{ skewX: "45deg" }]
  },
  text10: {
    flex: 1,
    fontSize:20,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ skewY: "60deg" }] // 比较不同，内部文字也会改变，rotate内部文字不会改变
  }
});
