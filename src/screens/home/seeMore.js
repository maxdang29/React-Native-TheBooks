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
    const {data, title} = this.props;
    const dataFilter = this.filterData(data, title);
    const bookData = dataFilter[0].data[0].data;

    return <FlatListBookColumnItem data={bookData}  />;
  }
}
