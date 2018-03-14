import React from 'react';
import { Button,View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

// 定义一个标题
class LogoTitle extends React.Component {
  render() {
    return (
      <Text style ={ {flex:1, fontSize:30,color:'green',textAlign:'center'}}>
      标题
      </Text>
    );
  }
}

class HomeScreen extends React.Component {
 
  static navigationOptions = ({navigation})=>{
    // ||表示不为空取前者的值，否则取后者的值
    const params = navigation.state.params || {};
    return {
    // title: 'Home',
    headerTitle:<LogoTitle/>,
    // 同时添加左右键 保证居中
    headerLeft:(
      <Button onPress={()=>navigation.goBack()}
      title ="Back"
      color = "#000"   />
    ),
    // 添加一个右键
    headerRight:(
      <Button onPress={params.increaseCount}
      title ="+1"
      color = "#839"  
      />
    ),
    headerStyle:{
      backgroundColor:'#fff',
    },
    headerTintColor :'#fff',
    headerTitleStyle:{
      fontWeight:'100',
    },  
  }
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
          title = "GO TO DETAIL"
          onPress={() => this.props.navigation.navigate('Details',{itemId:10,msg:"Hello"})}
        />
      </View>
    );
  }
}


//创建第二屏
class DetailsScreen extends React.Component {
  // 让navigationOptions等于一个函数
  // 函数传入一个navigation，获取state，设置title
  static navigationOptions = ({navigation,navigationOptions}) =>{
    const {params} = navigation.state;

    return {
      title:params?params.msg:'A Details Screen',
      // 自定义左键  关联goback() 解决返回很慢的问题
      headerLeft:(
        <Button onPress={()=>navigation.goBack()}
        title ="Back"
        color = "#000"   />
      ),
      
      // 测试下调换颜色  注意上面传入了navigationOptions
      headerStyle:{
        backgroundColor:navigationOptions.headerTintColor,
      },
      headerTintColor:navigationOptions.headerStyle.backgroundColor,
    }
  };
  render() {
    const {params} =this.props.navigation.state;
    const itemId = params?params.itemId:null;
    const msg = params?params.msg:null;
    console.log(this.props);
    console.log(this.props.navigation);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,margin:5}}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>msg: {JSON.stringify(msg)}</Text>
        <Button 
          title = 'GO TO DETAIL AGAIN'
          onPress = {()=>this.props.navigation.navigate('Details',{itemId:itemId,msg:msg})}         
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({itemId:itemId,msg: 'Update Screen'})}
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
    navigationOptions:{
      headerBackImage:require('./apple.jpg'),
      headerStyle:{
        backgroundColor:'red',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
        alignSelf:'center',
      },
    },  // 这里有个逗号
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}