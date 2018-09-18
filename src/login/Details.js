import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Details extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>This Is Details Screen For Test</Text>
        <Text>点击下方按钮返回上一页面</Text>
        <Button
            title="GO BACK"
            onPress={() => {this.props.navigation.goBack();}}
        />
      </View>
    );
  }
}

