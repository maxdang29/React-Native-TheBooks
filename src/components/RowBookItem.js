import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class RowBookItem extends Component {
  render() {
    const {item} = this.props;
    console.log('item ben row', item);
    return (
      <View style={styles.container}>
        <View style={styles.shadowView}>
          <Image
            style={styles.image}
            source={{
              uri: item.Book.Medias[0].ImageUrl,
              // uri:
              //   'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&w=1000&q=80',
            }}
          />
        </View>

        <View style={styles.bookDescription}>
          <Icon style={styles.cancelItem} name="remove" />

          <Text style={styles.bookTitle}>
            {item.Book.Title.substring(0, 18)} ...
          </Text>
          <Text style={styles.bookAuthor}>Amy Nguyen</Text>
          <View style={styles.viewFlexDirection}>
            <Icon style={styles.iconRankChecked} name="star" />
            <Icon style={styles.iconRankChecked} name="star" />
            <Icon style={styles.iconRankChecked} name="star" />
            <Icon style={styles.iconRankChecked} name="star" />
            <Icon style={styles.iconRankUnchecked} name="star" />
            <Text style={styles.bookLike}> 342</Text>
          </View>

          <View style={styles.viewFlexDirection}>
            <View style={[styles.viewFlexDirection, styles.bottom]}>
              <Icon style={styles.iconDirection} name="book" />
              <Text style={styles.bookGrey}> 4 Quyển</Text>
            </View>
            <View
              style={[
                styles.viewFlexDirection,
                styles.iconBottom,
                styles.bottom,
              ]}>
              <Icon style={styles.iconDirection} name="tag" />
              <Text style={[styles.bookGrey, styles.bookPrice]}>36.000</Text>
            </View>
          </View>

          <View style={styles.viewFlexDirection}>
            <View style={[styles.viewFlexDirection, styles.bottom]}>
              <Icon style={styles.iconDirection} name="dollar" />
              <Text style={styles.bookGrey}> 18.000</Text>
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

              <Text style={[styles.bookQuantity]}>2</Text>

              <TouchableOpacity style={styles.UDQuantity}>
                <Text style={styles.textUD}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    // height: 76,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 4,
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
