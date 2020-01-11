import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {goAnotherScreen} from '../navigation/navigation';
import {countStars} from '../../src/utils/function';

export default class RowBookItem extends Component {
  render() {
    const {item} = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => goAnotherScreen('BookDetail', item, 'Chi tiết')}>
        <View style={styles.container}>
          <View style={styles.shadowView}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={{
                uri: item.Medias[0].ImageUrl,
              }}
            />
          </View>
          <View style={styles.bookDescription}>
            <Text style={styles.bookTitle}>{item.Title}</Text>
            <Text style={styles.bookAuthor}>{item.Authors[0].Name}</Text>
            <View style={styles.viewFlexDirection}>
              {countStars(
                item.OverallStarRating,
                styles.iconRankChecked,
                styles.iconRankUnchecked,
              )}
              <Text style={styles.bookLike}> {item.TotalReview}</Text>
            </View>

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
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  viewFlexDirection: {
    flexDirection: 'row',
  },
  image: {
    width: 130,
    height: 210,
    borderRadius: 5,
  },
  shadowView: {
    height: 210,
    width: 135,
    borderRadius: 5,
    marginVertical: 15,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
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
    marginHorizontal: 17,
    textAlign: 'center',
    top: 45,
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
