/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

let nativeSource= require('nativeImageSource');// 导入nativeImageSource函数
// 需要指定路径
let res = {
        android:'mipmap/ic_launcher',
        width:60,
        height:60,
      };

// 精确展示图片
let PixelRatio = require('PixelRatio'); // 引入函数
let pixelRatio = PixelRatio.get();  // 获得缩放比例

export default class App extends Component {

  // componentDidMount() {
  //   let uri = "https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Ftimgsa.baidu.com%2Ftimg%3Fimage%26quality%3D80%26size%3Db9999_10000%26sec%3D1524679165353%26di%3Da5187ee75526536ad3f3b5f925cbc29a%26imgtype%3D0%26src%3Dhttp%253A%252F%252Fimgsrc.baidu.com%252Fimage%252Fc0%25253Dshijue1%25252C0%25252C0%25252C294%25252C40%252Fsign%253D75cbc008692762d09433acfcc885628f%252Ff603918fa0ec08fa8d1a6c8c53ee3d6d55fbda87.jpg&thumburl=https%3A%2F%2Fss0.bdstatic.com%2F70cFvHSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D725766518%2C3316946296%26fm%3D200%26gp%3D0.jpg";
  //   Image.getSize(uri).then(
  //     (width,height)=>{
  //           // 获得正确的宽高，进行相应处理
  //           // 也可以通过prefetch来预下载某张网络图片。
  //           // Image.prefecth(uri).then((result)=>{ }).catch( )
  //     }
  //   ).catch
  // };

  // 加载网络、加载本地、加载资源文件夹
  // <Image style={styles.imageStyle} source={{ uri: imageUri }} />  
  // <Image style = {styles.imageStyle}  source={nativeSource(res)} />

  render() {

    // var imageUri =
    //   "https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Ftimgsa.baidu.com%2Ftimg%3Fimage%26quality%3D80%26size%3Db9999_10000%26sec%3D1524679165353%26di%3Da5187ee75526536ad3f3b5f925cbc29a%26imgtype%3D0%26src%3Dhttp%253A%252F%252Fimgsrc.baidu.com%252Fimage%252Fc0%25253Dshijue1%25252C0%25252C0%25252C294%25252C40%252Fsign%253D75cbc008692762d09433acfcc885628f%252Ff603918fa0ec08fa8d1a6c8c53ee3d6d55fbda87.jpg&thumburl=https%3A%2F%2Fss0.bdstatic.com%2F70cFvHSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D725766518%2C3316946296%26fm%3D200%26gp%3D0.jpg";
    return (
      <View style={styles.container}>          
        <Image style = {styles.imageStyle}  source={require('./screen.png')} />
        <Image style = {styles.imageStyle}  source={nativeSource(res)} />
        <Image style = {styles.imageStyle}  source={{uri:'ic_launcher'}} />
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
  imageStyle: {
    height:150,
    width:200,
    justifyContent: "center",
  },
  // perciseImageStyle:{
  //   width:actrualWidth / pixelRadio,
  //   height:actrualHeight / pixelRatio,
  // }
});
