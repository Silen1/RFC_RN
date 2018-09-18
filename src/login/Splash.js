import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';

export default class Splash extends Component {

  componentDidMount() {
    Alert.alert('3s后将从Splash页跳转至Browse页');
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('Browse');
    }, 3000);
  }
  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View >
          <Image
            style={styles.imagebg}
            source={require('../img/welcome.png')}
          />
        </View>
    );
  };
  static navigationOptions = {
    title: 'Splash',
    headerStyle: {
      backgroundColor: '#ff9999',
    },
    headerTintColor: '#fff'
  };
}

const styles = StyleSheet.create({
  imagebg: {
    width: '100%',
    height: '100%'
  }
});

