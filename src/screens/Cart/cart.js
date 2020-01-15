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

class Cart extends Component {
  async componentDidMount() {
    const cartId = await AsyncStorage.getItem('cartId');
    const token = await AsyncStorage.getItem('token');
    this.props.get_all_item_in_cart(cartId, token);
  }

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

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footer_text}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </>
    ) : (
      <View>
        <Image
          style={{width: 200, height: 200}}
          resizeMode="stretch"
          source={{
            uri:
              'https://cdn.dribbble.com/users/44167/screenshots/4199208/empty-cart-rappi.png',
          }}
        />
      </View>
    );
  }
}

const height = Dimensions.get('window').height / 2;
const styles = StyleSheet.create({
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
