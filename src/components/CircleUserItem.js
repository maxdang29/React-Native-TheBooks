import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
export default class CircleUserItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shadowView}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&w=1000&q=80',
            }}
          />
        </View>
        <Text style={styles.borrowAuthor}>Amy Nguyen</Text>
        <Text style={[styles.bookGrey, styles.borrowQuantity]}>36.000</Text>
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
    // fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
  },
  borrowQuantity: {
    color: '#adadad',
  },
});
