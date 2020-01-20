import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {goAnotherScreen} from './../../navigation/navigation';

export default class UpgradeSuccess extends Component {
  constructor(props) {
    super(props);
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        visible: false,
      },
    });
  }

  render() {
    const {value} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Xin chúc mừng !</Text>
        <Image
          style={styles.image}
          source={require('../../assets/img/tick.png')}
        />
        <Text style={styles.text}>
          Bạn đã là thành viên {value} và được hưởng mọi đặc quyền của gói.
        </Text>
        <TouchableOpacity
          style={styles.buttonCart}
          onPress={() => goAnotherScreen('Cart', null, 'Giỏ hàng')}>
          <Text style={styles.textButton}>Đến giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: 170,
    height: 170,
    marginVertical: 80,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5f5f5f',
  },
  text: {
    color: '#7f7f7f',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonCart: {
    height: 50,
    backgroundColor: '#33bea6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 40,
    width: 160,
    borderRadius: 3,
  },
  textButton: {
    color: 'white',
  },
});
