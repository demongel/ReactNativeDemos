import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { Alert,StyleSheet, Button,Text, View ,TextInput} from 'react-native';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  // 设置默认属性
  static defaultProps ={
    name:'tom',
  }
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class HomeScreen extends React.Component {
 
  constructor(props){
    super(props);
    console.log(props);
    this.state ={
      inputNum:''
    };
  };


  updateNum(newNum){
    this.setState(
      () => {return {inputNum:newNum}}
    );
  }

  // 需要导入Alert
  // Alert.alert 第一个是弹出标题，第二个是详细信息，还可以接点击方法
//   Alert.alert(
//     "弹出框标题",
//     "弹出框正文",
//     [
//         {text: 'ask me later'},
//         {text: '取消', onPress:XXX},
//         {text: '确定', onPress:XXX}
//     ],
//     {cancelable: true}
// );
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput style={styles.inputStyle} onChangeText = {(newNum)=>{this.updateNum(newNum)}}>          
        </TextInput>        
        <Greeting style = {styles.textStyle} name = {this.state.inputNum}/>    
        <Button style={styles.inputStyle}  title="测试弹窗" 
          onPress = {()=>{Alert.alert('提示','确定么？',[{text:'yes'},{text:'no'},{text:'justJoke'} ]);}}
        />
      </View>
    );
  }
  
}

// 用于属性验证
Greeting.propTypes ={
  name:PropTypes.string,
}



let styles = StyleSheet.create({
    inputStyle:{
      // flex:1,
      fontSize:20,
      margin:20,
      // justifyContent: 'center',
      backgroundColor:'yellow',
    },
    textStyle:{
      // flex:1,
      fontSize:20,
      margin:20,
      backgroundColor:'green',
    },
  }    
);




