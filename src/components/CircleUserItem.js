import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export default class CircleUserItem extends Component {
  render() {
    const {item, type} = this.props;
    const ImageUrl = item.ImageUrl
      ? item.ImageUrl
      : 'https://the-books-dev-files.s3.amazonaws.com/Image/nguyen huong_1545511306138.png';
    const itemName = item.Name;
    const quantity = item.BooksCount
      ? item.BooksCount + ' lượt mượn'
      : item.ReviewCount + ' nhận xét';
    return (
      <View style={styles.container}>
        <View style={styles.shadowView}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{
              uri: ImageUrl,
            }}
          />
        </View>
        <Text style={styles.borrowAuthor}>{itemName}</Text>
        <Text style={[styles.bookGrey, styles.borrowQuantity]}>{quantity}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 3,
    width: 160,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  shadowView: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 10,
    top: 4,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  borrowAuthor: {
    color: '#4a4a4a',
    textAlign: 'center',
  },
  borrowQuantity: {
    color: '#adadad',
  },
});
