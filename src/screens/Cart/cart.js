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
    const data = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(data);
    console.log('member ship', userData);
    if (userData.IsMembershipExpired === true || userData.MaxBorrowDays === 0) {
      showConfirmAlert(
        'Đặt hàng',
        'Bạn chư alaf thành viên hoặc gói thành viên của bạn không đủ! Bạn có muốn nâng cấp thêm?',
        [
          {
            text: 'Không, cảm ơn',
          },
          {
            text: 'Nâng cấp ngày',
            onPress: () => {
              goAnotherScreen('Membership', null, 'danh sach goi');
            },
          },
        ],
      );
    }
  };

  render() {
    const {data} = this.props;
    let {loading} = this.props;
    let isExistsData = Array.isArray(data)
      ? data.length !== 0
        ? true
        : false
      : (loading = true);

    return loading ? (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    ) : isExistsData ? (
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
    ) : (
      <View style={styles.emptyCartView}>
        <Image
          style={styles.emptyCartImage}
          resizeMode="stretch"
          source={{
            uri:
              'https://cdn.dribbble.com/users/44167/screenshots/4199208/empty-cart-rappi.png',
          }}
        />
        <Text style={styles.emptyCartText}>Không có sản phẩm màu</Text>
      </View>
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
    alignItems: 'center',
    paddingTop: 10,
    width: Dimensions.get('window').width,
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
    data: state.cartReducers.data,
    loading: state.cartReducers.loadingCart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_all_item_in_cart: (id, token) => {
      dispatch(Action.getAllItemByCartId(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
