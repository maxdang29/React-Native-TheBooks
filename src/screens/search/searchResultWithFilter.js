import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FlatListBookColumnItem from '../../components/flatListColumBookItem';
export default class SearchResultFilter extends Component {
  render() {
    const {data} = this.props;
    return <FlatListBookColumnItem data={data.dataSearch} />;
  }
}