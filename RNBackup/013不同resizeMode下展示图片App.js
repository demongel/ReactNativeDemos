/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";


export default class App extends Component {

  render() {

    return (
      <View style={styles.container}>          
        <Image style = {styles.imageStyle1}  source={require('./screen.png')} />
        <Image style = {styles.imageStyle2}  source={require('./screen.png')} />
        <Image style = {styles.imageStyle3}  source={require('./screen.png')} />
        <Image style = {styles.imageStyle4}  source={require('./screen.png')} />
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
  imageStyle1: {
    marginTop:5,
    height:150,
    width:200,
    resizeMode:'cover',
    justifyContent: "center",
    backgroundColor:'red',
  },
  imageStyle2: {
    marginTop:5,
    height:150,
    width:200,
    resizeMode:'center',
    justifyContent: "center",
    backgroundColor:'red',
  },
  imageStyle3: {
    marginTop:5,
    height:150,
    width:200,
    resizeMode:'contain',
    justifyContent: "center",
    backgroundColor:'red',
  },
  imageStyle4: {
    marginTop:5,
    height:150,
    width:200,
    resizeMode:'stretch',
    justifyContent: "center",
    backgroundColor:'red',
  },
  // perciseImageStyle:{
  //   width:actrualWidth / pixelRadio,
  //   height:actrualHeight / pixelRatio,
  // }
});
