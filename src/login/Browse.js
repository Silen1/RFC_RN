import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Alert } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Browse extends Component {

  _onPressButton() {
  }

  render() {
    return (
      <Swiper style={styles.wrapper}
        showsButtons={false}
        loop={false}>
        <View style={styles.slide1}>
          <Image
            style={styles.imagebg}
            source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51m0RIKKm1L.jpg'}}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            style={styles.imagebg}
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536920417190&di=a812bad5e18713d31696e9d9b14c282b&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fsjbizhi%2Fimages%2F8%2F320x510%2F1445312522152.jpg'}}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            style={styles.imagebg}
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536920417189&di=a3bde7fba6225020e8a3c707e0e0095a&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fsjbizhi%2Fimages%2F3%2F320x510%2F1359515745624.jpg'}}
          />
        </View>
        <TouchableHighlight style={styles.slide1} onPress={this._onPressButton}>
          {/* <View style={styles.slide1}> */}

            <Image
              style={styles.imagebg}
              source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536920417188&di=d2884dc11aa5c4104dfe4f68d3416037&imgtype=0&src=http%3A%2F%2Fp1.wmpic.me%2Farticle%2F2015%2F11%2F30%2F1448861850_WHiSmhCS.jpg'}}
            />
          {/* </View> */}
        </TouchableHighlight>
      </Swiper>
    );
  };
  static navigationOptions = {
    title: 'Browse',
    headerStyle: {
      backgroundColor: '#ff9999',
    },
    headerTintColor: '#fff'
  };
}

const styles = StyleSheet.create({

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagebg: {
    width: '100%',
    height: '100%'
  }
});

