import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { Button, Text, View } from 'react-native';


// 定义一个标题
class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={{ flex: 1, fontSize: 30, color: 'green', textAlign: 'center' }}>
        HOME
      </Text>
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // ||表示不为空取前者的值，否则取后者的值
    const params = navigation.state.params || {};
    return {
      // title: 'Home',
      headerTitle: <LogoTitle />,
      // 同时添加左右键 保证居中
      headerLeft: (
        // 切换到模态页面？
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#000"
        />
      ),
      // 添加一个右键
      headerRight: (
        <Button onPress={params.increaseCount}
          title="none"
          color="#839"
        />
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '100',
      },
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  // 函数传入一个navigation，获取state，设置title
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.msg : 'A Details Screen',
      // 自定义左键  关联goback() 解决返回很慢的问题
      headerLeft: (
        <Button onPress={() => navigation.goBack()}
          title="Back"
          color="#000" />
      ),
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class SettingDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.msg : 'A Details Screen',
      // 自定义左键  关联goback() 解决返回很慢的问题
      headerLeft: (
        <Button onPress={() => navigation.goBack()}
          title="Back"
          color="#079" />
      ),
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SettingDetailsScreen!</Text>
      </View>
    );
  }
}

// 定义两个导航栈
const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: SettingDetailsScreen },
});

export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // tabBarIcon: ({ focused, tintColor }) => {
      // const { routeName } = navigation.state;
      // let iconName;
      // if (routeName === 'Home') {
      //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      // } else if (routeName === 'Settings') {
      //   iconName = `ios-options${focused ? '' : '-outline'}`;
      // }

      // // You can return any component that you like here! We usually use an
      // // icon component from react-native-vector-icons
      // return <Ionicons name={iconName} size={25} color={tintColor} />;
      // },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,  // 使用了这个组件 点击切换是正常的。。。
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);