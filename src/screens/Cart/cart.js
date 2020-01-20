import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import * as Action from '../../redux/cart/actions/actions';
import * as orderAction from '../../redux/order/actions/actions';
import RowBookItem from '../../components/RowBookItem';
import AsyncStorage from '@react-native-community/async-storage';
import {showConfirmAlert} from '../../navigation/showConfirmAlert';
import {goAnotherScreen} from '../../navigation/navigation';
import {Colors} from '../../themes';
import {Navigation} from 'react-native-navigation';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }
  async componentDidMount() {
    const cartId = await AsyncStorage.getItem('cartId');
    const token = await AsyncStorage.getItem('token');
    this.props.get_all_item_in_cart(cartId, token);
  }
  navigationButtonPressed({buttonId}) {
    const {componentId} = this.props;
    if (buttonId === 'back') {
      Navigation.dismissModal(componentId);
    }
  }

  checkUserMember = async () => {
    const {componentId} = this.props;
    const data = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(data);
    if (userData.IsMembershipExpired === false && userData.MaxBorrowDays > 0) {
      const userId = await AsyncStorage.getItem('userId');
      const token = await AsyncStorage.getItem('token');
      const data = {
        UserId: userId,
      };
      await this.props.post_order(data, componentId, token);
    } else {
      showConfirmAlert(
        'Đặt hàng',
        'Bạn chưa là thành viên hoặc gói thành viên của bạn không đủ! Bạn có muốn nâng cấp thêm?',
        [
          {
            text: 'Không, cảm ơn',
          },
          {
            text: 'Nâng cấp ngày',
            onPress: () => {
              goAnotherScreen('Membership', null, 'Danh sách gói');
            },
          },
        ],
      );
    }
  };

  render() {
    const {data, loading} = this.props;

    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (data.length === 0) {
      return (
        <View style={styles.emptyCartView}>
          <Image
            style={styles.emptyCartImage}
            resizeMode="stretch"
            source={{
              uri:
                'https://cdn.dribbble.com/users/44167/screenshots/4199208/empty-cart-rappi.png',
            }}
          />
        </View>
      );
    }
    return (
      <>
        <ScrollView>
          <View>
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.Id}
              renderItem={({item}) => (
                <RowBookItem item={item} isInCart={true} />
              )}
            />
          </View>
        </ScrollView>

        <View>
          <TouchableOpacity
            style={styles.footer}
            onPress={() => this.checkUserMember()}>
            <Text style={styles.footer_text}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const height = Dimensions.get('window').height / 2;
const styles = StyleSheet.create({
  emptyCartView: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 6,
  },
  emptyCartImage: {
    width: 400,
    height: 400,
  },
  emptyCartText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.lightBlue,
  },
  footer: {
    backgroundColor: '#fc9619',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer_text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },

  loading: {
    color: '#0f0',
    alignItems: 'center',
    marginVertical: height,
  },
});

const mapStateToProps = state => {
  return {
    data: state.cartReducer.data,
    loading: state.cartReducer.loadingCart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_all_item_in_cart: (id, token) => {
      dispatch(Action.getAllItemByCartId(id, token));
    },
    post_order: (data, componentId, token) => {
      dispatch(orderAction.addOrder(data,componentId, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
