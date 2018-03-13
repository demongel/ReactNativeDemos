import React from 'react';
import { Button,View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
          title = "GO TO DETAIL"
          onPress={() => this.props.navigation.navigate('Details',{itemId:10,msg:"hello"})}
        />
      </View>
    );
  }
}


//创建第二屏
class DetailsScreen extends React.Component {
  render() {
    const {params} =this.props.navigation.state;
    const itemId = params?params.itemId:null;
    const msg = params?params.msg:null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,margin:5}}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>msg: {JSON.stringify(msg)}</Text>
        <Button 
          title = 'GO TO DETAIL AGAIN'
          onPress = {()=>this.props.navigation.navigate('Details')}         
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}