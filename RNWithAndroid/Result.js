import React from 'react';
import { TextInput,Button,View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { styles } from './App';

// 定义一个标题
class LogoTitle extends React.Component {
  render() {
    return (
      <Text style ={ {flex:1, fontSize:30,color:'green',textAlign:'center'}}>
      HOME
      </Text>
    );
  }
}

export default class ResultScreen extends React.Component {
 
  constructor(props){
    super(props);
    console.log(props);
    this.state ={
      name:'',
      num:'',
    };
    this.updateInfo = this.updateInfo.bind(this);
  };

  static navigationOptions = ({navigation})=>{
    const params = navigation.state.params || {};
    if(params!=null){
      // this.setState((state)=>{
      //   return {
      //     name:params.name,
      //     age:params.age,
      //   }
      // });
      // updateInfo(params);
    }
  };

  updateInfo(params){
    this.setState((state)=>{
      return {
        name:params.name,
        num:params.num,
      }
    });
  }


  render() {
    const {params} =this.props.navigation.state;
    // this.updateInfo(params);
    const name = params?params.name:null;
    const num = params?params.num:null;
    console.log(name);
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.inputStyle} > 
            姓名是：{name} 
        </Text>
        <Text style={styles.inputStyle} > 
            号码是：{num} 
        </Text>         
       
        <Button style={styles.inputStyle}  title="返回" 
          onPress = {() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
  
}

