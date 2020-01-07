import React, {Component} from 'react';
import {Text, View, StyleSheet, SectionList} from 'react-native';
import ColumBookItem from './ColumnBookItem';
import {offlineData} from '../utils/offlineData';
import {convertDataToSection} from '../utils/function';
const data = offlineData.Data;

const NAME = {
  NewBooks: 'Sách Mới',
  HotTrendBooks: 'Sách Được Yêu thích',
  MostBorrowBooks: 'Sách Mượn Nhiều',
};
const books = convertDataToSection(data, NAME);

export default class SectionListBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: books,
    };
  }

  render() {
    const {bookData} = this.state;
    return (
      <View>
        <SectionList
          sections={bookData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <ColumBookItem item={item} index={index} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text>{title}</Text>
          )}
        />
      </View>
    );
  }
}
