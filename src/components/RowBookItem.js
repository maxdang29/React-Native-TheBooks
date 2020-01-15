import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {goAnotherScreen} from '../navigation/navigation';
import {countStars} from '../../src/utils/function';
import {connect} from 'react-redux';
import * as Action from '../redux/cart/actions/actions';
import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/thebook-appicon';

class RowBookItem extends Component {
  updateQuantity = async (quantity, bookId) => {
    const userId = await AsyncStorage.getItem('userId');
    const idBasket = await AsyncStorage.getItem('cartId');
    const token = await AsyncStorage.getItem('token');
    const data = {
      BookId: bookId,
      Quantity: quantity,
      UserId: userId,
    };
    this.props.update_item_in_cart(idBasket, data, token);
  };

  deleteItemInCart = async bookId => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');
    const data = {
      BookId: bookId,
      DeleteAll: false,
      UserId: userId,
    };
    this.props.delete_item_in_cart(data, token);
  };

  render() {
    const {item, isInCart} = this.props;
    const urlImage = item.Book
      ? item.Book.Medias[0].ImageUrl
      : item.Medias[0].ImageUrl;
    const Authors = item.Book
      ? item.Book.Authors[0].Name
      : item.Authors[0].Name;
    const TotalReview = item.Book ? item.Book.TotalReview : item.TotalReview;
    const title = item.Book ? item.Book.Title : item.Title;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => goAnotherScreen('BookDetail', item.Book, 'Chi tiết')}>
          <View style={styles.shadowView}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={{
                uri: urlImage
                  ? urlImage
                  : 'https://member.thebooks.vn/static/media/Bia_sach.01b3a899.jpg',
              }}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.bookDescription}>
          {isInCart ? (
            <TouchableOpacity
              onPress={() => this.deleteItemInCart(item.Book.Id)}>
              <Icons style={styles.cancelItem} name="ic-delete" />
            </TouchableOpacity>
          ) : null}

          <Text style={styles.bookTitle}>{title} ...</Text>
          <Text style={styles.bookAuthor}>{Authors}</Text>
          <View style={styles.viewFlexDirection}>
            {countStars(
              item.OverallStarRating,
              styles.iconRankChecked,
              styles.iconRankUnchecked,
            )}
            <Text style={styles.bookLike}> {TotalReview}</Text>
          </View>

          {!isInCart ? (
            <View style={styles.viewFlexDirection}>
              <View style={[styles.viewFlexDirection, styles.bottom]}>
                <Icon style={styles.iconDirection} name="book" />
                <Text style={styles.bookGrey}>{item.Quantity} quyển</Text>
              </View>
              <View
                style={[
                  styles.viewFlexDirection,
                  styles.iconBottom,
                  styles.bottom,
                ]}>
                <Icon style={styles.iconDirection} name="tag" />
                <Text style={[styles.bookGrey, styles.bookPrice]}>
                  {item.Price}
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.viewFlexDirection}>
              <View style={[styles.viewFlexDirection, styles.bottom]}>
                <Icon style={styles.iconDirection} name="dollar" />
                <Text style={styles.bookGrey}>{item.Book.Price}</Text>
              </View>
              <View
                style={[
                  styles.viewFlexDirection,
                  styles.iconBottom,
                  styles.bottom,
                ]}>
                <TouchableOpacity
                  style={styles.UDQuantity}
                  onPress={() =>
                    this.updateQuantity(item.Quantity - 1, item.Book.Id)
                  }>
                  <Text style={[styles.textUD]}>-</Text>
                </TouchableOpacity>

                <Text style={[styles.bookQuantity]}>{item.Quantity}</Text>

                <TouchableOpacity
                  style={styles.UDQuantity}
                  onPress={() =>
                    this.updateQuantity(item.Quantity + 1, item.Book.Id)
                  }>
                  <Text style={styles.textUD}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.cartReducers.data,
    loading: state.cartReducers.loadingCart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update_item_in_cart: (id, data, token) => {
      dispatch(Action.updateItemInCart(id, data, token));
    },
    get_all_item_in_cart: (id, token) => {
      dispatch(Action.getAllItemByCartId(id, token));
    },
    delete_item_in_cart: (data, token) => {
      dispatch(Action.deleteItemInCart(data, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RowBookItem);

const styles = StyleSheet.create({
  cancelItem: {
    // textAlign: 'right',
    // marginTop: -10,
    // fontSize: 12,
    // marginRight: 20,
    // marginBottom: 10,
  },
  bookQuantity: {
    fontSize: 17,
    color: '#bcbcbc',
  },
  textUD: {
    fontSize: 17,
    color: '#bcbcbc',
  },
  UDQuantity: {
    width: 50,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    // paddingVertical: ,
  },
  viewFlexDirection: {
    flexDirection: 'row',
  },
  image: {
    width: 130,
    height: 210,
    borderRadius: 6,
  },
  shadowView: {
    height: 210,
    width: 136,
    borderRadius: 6,
    marginVertical: 16,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  bookTitle: {
    fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    fontSize: 16,
    width: 240,
  },
  bookAuthor: {
    color: '#bcbcbc',
    fontSize: 17,
    width: 230,
    top: 1,
  },
  bookGrey: {
    color: '#bcbcbc',
    fontSize: 17,
  },

  bookPrice: {
    left: 5,
  },
  iconDirection: {
    color: '#fda942',
    borderColor: '#000',
    fontSize: 20,
    right: 3,
    top: 2,
  },
  bookDescription: {
    marginHorizontal: 16,
    textAlign: 'center',
    top: 35,
  },

  iconBottom: {
    left: 35,
  },

  bottom: {
    top: 32,
  },
  iconRankChecked: {
    color: '#fda942',
    marginRight: 3,
    top: 10,
  },
  iconRankUnchecked: {
    color: '#bcbcbc',
    marginRight: 3,
    top: 10,
  },
  bookLike: {
    color: '#bcbcbc',
    left: 10,
    top: 5,
  },
});
