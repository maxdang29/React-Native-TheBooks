import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {goAnotherScreen} from '../navigation/navigation';
import {countStars} from '../../src/utils/function';

export default class RowBookItem extends Component {
  render() {
    const {item, isInCart} = this.props;
    console.log('item trong row', item);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => goAnotherScreen('BookDetail', item.Book, 'Chi tiết')}>
          <View style={styles.shadowView}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={{
                uri: item.Book.Medias[0].ImageUrl,
              }}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.bookDescription}>
          <Icon style={styles.cancelItem} name="remove" />
          <Text style={styles.bookTitle}>
            {item.Book.Title.substring(0, 13)} ...
          </Text>
          <Text style={styles.bookAuthor}>{item.Book.Authors[0].Name}</Text>
          <View style={styles.viewFlexDirection}>
            {countStars(
              item.OverallStarRating,
              styles.iconRankChecked,
              styles.iconRankUnchecked,
            )}
            <Text style={styles.bookLike}> {item.Book.TotalReview}</Text>
          </View>

          {!isInCart ? (
            <View style={styles.viewFlexDirection}>
              <View style={[styles.viewFlexDirection, styles.bottom]}>
                <Icon style={styles.iconDirection} name="book" />
                <Text style={styles.bookGrey}>{item.Quantity}</Text>
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
                <TouchableOpacity style={styles.UDQuantity}>
                  <Text style={[styles.textUD]}>-</Text>
                </TouchableOpacity>

                <Text style={[styles.bookQuantity]}>{item.Quantity}</Text>

                <TouchableOpacity style={styles.UDQuantity}>
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

const styles = StyleSheet.create({
  cancelItem: {
    marginLeft: 210,
    top: -12,
    fontSize: 17,
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
    // fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    fontSize: 18,
    width: 240,
  },
  bookAuthor: {
    // fontFamily: 'SVN-ProximaNova',
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
