/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Details from './src/login/Details';
import Splash from './src/login/Splash';
import Browse from './src/login/Browse';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>点击下方按钮跳转至详情页</Text>
        <Button
          title="GO Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Text>点击下方按钮跳转至Splash页</Text>
        <Button
          title="GO Splash"
          onPress={() => this.props.navigation.navigate('Splash')}
        />
      </View>
    );
  };
  static navigationOptions = {
    title: '主页',
    headerStyle: {
      backgroundColor: '#ff9999',
    },
    headerTintColor: '#fff'
  };
}

const RootStack = createStackNavigator(
  {
    Home,
    Details,
    Splash,
    Browse
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
