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

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true };

//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       this.setState(previousState => {
//         return { showText: !previousState.showText };
//       });
//     }, 100);
//   }

//   render() {
//     // 根据当前showText的值决定是否显示text内容
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.prop1 = 'prop1'; // 测试添加成员变量
    this.prop2 = 'prop2';
    this.state = { 
      inputNum:'',
      password:''  
    };
    this.updatePW = this.updatePW.bind(this);
  }

   updateNum(newNum){
    console.log(' updateNum has been exec'); 
    // console.log(this);
    // this.forceUpdate();
    this.setState((state) => {      
      // var a =[];
      // for (let index = 0; index < 10; index++) {
      //   a[index] = function(){
      //     console.log(index);
      //   } ;       
      // }
      // a[6]();

      return {
        inputNum:newNum,
      };});
  }

  print(){
    console.log('test print');
    this.forceUpdate();
  }

  updatePW(newPW){
    // this.setState({inputNum});  简写形式
    this.setState(
      () => {
        return {password : newPW,};
      }
    );
  }

  forceUpdate(){
    console.log('forceUpdate exec');
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate exec');
    if(this.state.inputNum.length < 3){
      return false;
    }
    return true;
  }

  render() {    
    console.log('render exec');
    // console.log(this);
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.textInputStyle}
          placeholder = {'请输入手机号'} 
          onChangeText = {(newNum)=>this.updateNum(newNum)}
          // onChangeText = {this.updateNum}
          />
        <Text style = {styles.textStyle}>
           输入的手机号：{this.state.inputNum}
        </Text>
        <TextInput style = {styles.textInputStyle}
          placeholder = {'请输入密码'}
          password = {true}
          onChangeText = {this.updatePW}
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
