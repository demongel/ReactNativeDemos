import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { Alert, StyleSheet, Button, Text, View, TextInput,DeviceEventEmitter } from 'react-native';
import PropTypes from 'prop-types';
import ResultScreen from './Result'

export class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={{ flex: 1, fontSize: 30, color: 'green', textAlign: 'center' }}>
        注册
      </Text>
    );
  }
}

export class RegisterScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      num: '',
      
    };
    this.updateNum = this.updateNum.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    // ||表示不为空取前者的值，否则取后者的值
    const params = navigation.state.params || {};
    return {
      // title: 'Home',
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '100',
      },
    }
  };

  updateName(name) {
    this.setState((state) => {
      return { name: name, };
    });
  }

  updateNum(num) {
    this.setState((state) => {
      return { num: num, };
    });
  }

  sendMsgToAndroid() {
    var { NativeModules } = require('react-native');
    let test = NativeModules.RNTest;
    test.handleMsg('this is a rn msg');
  }

  getContactFromAndroid(){
    // 监听安卓消息
    DeviceEventEmitter.addListener('AndroidToRNMessage',this.handleAndroidMsg.bind(this));
    var { NativeModules } = require('react-native');
    let test = NativeModules.RNTest;
    test.pickContact();
  }

  handleAndroidMsg(msg){
    console.log(msg);
    let aObj = JSON.parse(msg);
    this.updateName(aObj.name);
    this.updateNum(aObj.number);
    // this.setState({name:aObj.name,num:aObj.number})
    DeviceEventEmitter.removeAllListeners();
  }

  render() {
    
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput onChangeText={(name) => { this.updateName(name) }} placeholder='请输入姓名' style={styles.inputStyle} >
          {this.state.name}
        </TextInput>
        <TextInput onChangeText={(num) => { this.updateNum(num) }} placeholder='请输入号码' style={styles.inputStyle} >
          {this.state.num}
        </TextInput>
        <View style={styles.containerStyle}>
          <Button
            title="GO TO result"
            onPress={() => {
              console.log('name' + this.state.name);
              this.props.navigation.navigate('result', { name: this.state.name, num: this.state.num })
            }
            }
          />
        </View>
        <View style={styles.containerStyle}>
          <Button
            title="给原生发消息"
            onPress={() => this.sendMsgToAndroid()
            }
          />
        </View>
        <View style={styles.containerStyle}>
          <Button
            title="获取联系人"
            onPress={() => this.getContactFromAndroid()
            }
          />
        </View>
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
  inputStyle: {
    // flex:1,
    fontSize: 20,
    margin: 20,
    // justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'yellow',
  },
  textStyle: {
    // flex:1,
    fontSize: 20,
    margin: 20,
    backgroundColor: 'green',
  },
  containerStyle: {
    margin: 10,
    backgroundColor: 'green',
  },
}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


