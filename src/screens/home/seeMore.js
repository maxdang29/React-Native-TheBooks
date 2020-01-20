import React, {Component} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';

import FlatListBookColumnItem from '../../components/flatListColumBookItem';

export default class SeeMore extends Component {
  constructor(props) {
    super(props);
  }

  filterData = (data, title) => {
    let array = data.filter(item => {
      return item.title === title;
    });
    return array;
  };
  render() {
    let bookData = [];
    const {data, title} = this.props.value;
    const {value} = this.props;

    if (title) {
      const dataFilter = this.filterData(data, title);
      bookData = dataFilter[0].data[0].data;
    } else {
      bookData = value;
    }

    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatListBookColumnItem data={bookData} />
      </View>
    );
  }
}
