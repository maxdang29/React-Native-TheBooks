import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';
import {goAnotherScreen} from '../../navigation/navigation';
import {connect} from '../../../node_modules/react-redux';
import * as Action from '../../redux/order/actions/actions';
import AsyncStorage from '@react-native-community/async-storage';

class ListOrder extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    const userData = await AsyncStorage.getItem('userData');
    const token = await AsyncStorage.getItem('token');
    const id = JSON.parse(userData).Id;
    this.props.get_order_by_id(id, token);
  }

  render() {
    const {data} = this.props;
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.shadowView}>
            <View style={styles.item}>
              <View style={styles.row}>
                <View style={styles.dateContainer}>
                  <Text style={styles.date}>20/12/1019</Text>
                </View>

                <View style={styles.infor}>
                  <View style={styles.row}>
                    <Icons
                      name="ic-code"
                      solid
                      size={25}
                      color={'#fc9619'}
                      style={styles.icon}
                    />
                    <Text style={[styles.text, styles.qr]}>K234H32JS</Text>
                  </View>
                  <View style={styles.row}>
                    <Icons
                      name="ic-price-1"
                      solid
                      size={20}
                      color={'#fc9619'}
                      style={styles.icon}
                    />
                    <Text style={styles.text}>164.000</Text>
                  </View>
                  <Text>Hạn trả: 10-04-2019</Text>
                </View>
                <Text style={styles.status}>Đang mượn</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.circleContainer}>
          <TouchableOpacity
            onPress={() => goAnotherScreen('Cart', null, 'Giỏ hàng')}>
            <Icons style={styles.iconCart} size={35} name="ic-cart" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_order_by_id: (id, token) => {
      dispatch(Action.getOrderById(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOrder);

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  dateContainer: {
    justifyContent: 'center',
    height: 120,
    paddingRight: 20,
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1d9dd8',
    fontWeight: '700',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 20,
    height: 120,
  },
  text: {
    fontSize: 16,
    fontFamily: 'SVN-ProximaNova',
    color: '#7f7f7f',
  },
  icon: {
    marginRight: 10,
  },
  infor: {
    borderLeftColor: '#7f7f7f',
    borderLeftWidth: 0.5,
    paddingLeft: 20,
  },
  status: {
    marginLeft: 20,
  },
  qr: {
    fontWeight: '700',
  },
  circleContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#39b8c2',
    borderRadius: 50,
    padding: 10,
    margin: 20,
  },
  iconCart: {
    color: 'white',
  },
  shadowView: {
    margin: 15,
    borderRadius: 5,
    elevation: 8,
    shadowColor: 'gray',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
