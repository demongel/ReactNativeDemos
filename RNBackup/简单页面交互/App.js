import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { Alert,StyleSheet, Button,Text, View ,TextInput} from 'react-native';
import PropTypes from 'prop-types';
import ResultScreen from './Result'

export class LogoTitle extends React.Component {
  render() {
    return (
      <Text style ={ {flex:1, fontSize:30,color:'green',textAlign:'center'}}>
      注册
      </Text>
    );
  }
}

export  class RegisterScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:'',
      age:'',
    };
  }
 
  static navigationOptions = ({navigation})=>{
    // ||表示不为空取前者的值，否则取后者的值
    const params = navigation.state.params || {};
    return {
    // title: 'Home',
    headerTitle:<LogoTitle/>,
    headerStyle:{
      backgroundColor:'#fff',
    },
    headerTintColor :'#fff',
    headerTitleStyle:{
      fontWeight:'100',
    },  
  }
  };

  updateName(name){
    this.setState((state) => {
        return {name:name,};
    });
  }

  updateAge(age){
    this.setState((state) => {
        return {age:age,};
    });
  }


  render() {
    return (
      <View style={{ flex: 1,  justifyContent: 'center' }}>
        <Text style ={styles.inputStyle}>Register Screen</Text>
        <TextInput onChangeText={(name)=>{this.updateName(name)}} placeholder ='请输入姓名' style ={styles.inputStyle}/>
        <TextInput  onChangeText={(age)=>{this.updateAge(age)}} placeholder ='请输入年龄' style ={styles.inputStyle}/>
        <Button 
          title = "GO TO result"
          
          onPress={() => {
            console.log('name'+this.state.name);
            this.props.navigation.navigate('result',{name:this.state.name,age:this.state.age})
          }            
        }
        />
      </View>
    );
  }
}


const RootStack = StackNavigator(
  {
    register: {
      screen: RegisterScreen,
    },
    result: {
      screen: ResultScreen,
    },
  },
  {
    initialRouteName: 'register',
  }
);

export let styles = StyleSheet.create({
    inputStyle:{
      // flex:1,
      fontSize:20,
      margin:20,
      // justifyContent: 'center',
      textAlign:'center',
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

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


