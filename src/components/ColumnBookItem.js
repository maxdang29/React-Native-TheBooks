import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {goAnotherScreen} from '../navigation/navigation';
import {countStars} from '../../src/utils/function';

export default class ColumBookItem extends Component {
  render() {
    const {item} = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => goAnotherScreen('BookDetail', item, 'Chi tiết')}>
        <View style={styles.shadowView}>
          <Image
            style={styles.image}
            source={{
              uri: item.Medias[0].ImageUrl,
            }}
          />
        </View>
        <View style={styles.bookDescription}>
          <Text style={styles.bookTitle}>{item.Title.substring(0, 13)}...</Text>
          <Text style={styles.bookAuthor}>{item.Authors[0].Name}</Text>
          <View style={styles.viewFlexDirection}>
            {countStars(
              item.OverallStarRating,
              styles.iconRankChecked,
              styles.iconRankUnchecked,
            )}
            <Text style={styles.bookLike}> {item.TotalReview} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  viewFlexDirection: {
    flexDirection: 'row',
  },
  image: {
    width: 160,
    height: 210,
    borderRadius: 5,
  },
  shadowView: {
    height: 210,
    width: 160,
    borderRadius: 5,
    marginVertical: 10,
    top: 4,
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
    width: 180,
    top: -1,
  },
  bookAuthor: {
    // fontFamily: 'SVN-ProximaNova',
    color: '#bcbcbc',
    fontSize: 17,
    width: 230,
    top: -5,
  },
  bookDescription: {
    width: 160,
    textAlign: 'center',
  },

  iconRankChecked: {
    color: '#fda942',
    marginRight: 3,
    top: -1,
  },
  iconRankUnchecked: {
    color: '#bcbcbc',
    marginRight: 3,
    top: -1,
  },
  bookLike: {
    color: '#bcbcbc',
    left: 10,
    top: -5,
  },
});
