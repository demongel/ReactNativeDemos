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
  TouchableOpacity,
  Dimensions
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let aLongString = "this is a very long string";
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle} ellipsizeMode="head" numberOfLines={1}>
          {aLongString}
        </Text>
        <Text style={styles.textStyle} ellipsizeMode="middle" numberOfLines={1}>
          {aLongString}
        </Text>
        <Text style={styles.textStyle} ellipsizeMode="tail" numberOfLines={1}>
          {aLongString}
        </Text>
        <Text style={styles.textStyle} ellipsizeMode="tail" numberOfLines={2}>
          {aLongString}
        </Text>

        <Text style={{ fontSize: 20, textAlign: "center" }}>
          我是20号字体
          <Text style={{ fontWeight: "bold" }}>
            {"\r\n"}加粗20号字体
            <Text style={{ color: "black" }}>{"\r\n"}加粗黑色20号字体</Text>
          </Text>
        </Text>

        <Text style={styles.shadowText}>阴影</Text>
        <Text style={styles.shadowText}>阴影
          <Image source={require('./screen.png')}  style={styles.imageInner} />
        </Text>

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
  textStyle: {
    height: 70,
    width: 200,
    fontSize: 30,
    justifyContent: "center",
    backgroundColor: "white",
    textAlign: "center",
    margin: 5
  },
  button2: {
    marginTop: 5, 
    height: 50,
    width: 100,
    backgroundColor: "gray"
  },
  shadowText:{
    fontSize:30,
    textShadowOffset:{width:5,height:5},
    textShadowRadius:3,
    textShadowColor:'blue'
  },
  imageInner:{
    width:80,
    height:80,
    resizeMode:'cover'
  }
});
