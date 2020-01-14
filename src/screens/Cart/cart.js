import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as Action from '../../redux/cart/actions/actions';
import RowBookItem from '../../components/RowBookItem';
import AsyncStorage from '@react-native-community/async-storage';
import {Navigation} from 'react-native-navigation';

class BookDetail extends Component {
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

  render() {
    const {data} = this.props;
    let isExistsData = Array.isArray(data)
      ? data.length !== 0
        ? true
        : false
      : false;

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
