/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
	Dimensions,
  PixelRatio,
  TextInput
} from 'react-native';

const {height,width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
let widthOfMargin = Dimensions.get('window').width*0.05;

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = { 
      inputNum:'',
      password:''  
    };
  }

  updateNum(newNum){
    this.setState((state) => {
      console.log('update has been exec');
      return {
        inputNum:newNum,
      };});
  }

  updatePW(newPW){
    this.setState(
      () => {
        return {password : newPW,};
      }
    );
  }

  render() {    
    console.log('render exec');
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.textInputStyle}
          placeholder = {'请输入手机号'} 
          onChangeText = {(newNum)=>this.updateNum(newNum)}
          />
        <Text style = {styles.textStyle}>
           输入的手机号：{this.state.inputNum}
        </Text>
        <TextInput style = {styles.textInputStyle}
          placeholder = {'请输入密码'}
          password = {true}
          />
        <Text style = {styles.bigTextStyle}>
          确定
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',// 内部的控件会居中
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInputStyle: {
    fontSize: 20,
    textAlign: 'center',  // 文字会居中
    backgroundColor: 'yellow',
    margin: widthOfMargin,
  },
  textStyle: {
    margin: widthOfMargin,
    // textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize:18,
  },
  bigTextStyle:{
    margin:widthOfMargin,
    backgroundColor:'green',  // 背景颜色
    textAlign:'center',
    color:'red',  // 文字颜色
    fontSize:30   //文字尺寸
  }
});
