import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as Action from '../../redux/cart/actions/actions';
import RowBookItem from '../../components/RowBookItem';
import AsyncStorage from '@react-native-community/async-storage';

class BookDetail extends Component {
  async componentDidMount() {
    const cartId = await AsyncStorage.getItem('cartId');
    const token = await AsyncStorage.getItem('token');
    console.log('3333: ', cartId, token);
    this.props.get_all_item_in_cart(cartId, token);
  }

  render() {
    const {data} = this.props;
    let isExistsData = Array.isArray(data)
      ? data.length !== 0
        ? true
        : false
      : false;

    console.log('item trong cart', data);
    return (
      <>
        <View>
          {isExistsData ? (
            <>
              <View>
                <FlatList
                  data={data}
                  keyExtractor={(item, index) => item.Id}
                  renderItem={({item}) => (
                    <RowBookItem item={item} isInCart={true} />
                  )}
                />
              </View>
            </>
          ) : (
            <Text>không có sản phẩm nào!</Text>
          )}
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('initial data ==>', state.cartReducers);
  return {
    data: state.cartReducers.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_all_item_in_cart: (id, token) => {
      dispatch(Action.getAllItemByCartId(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
