import React, {Component} from 'react';
import {View} from 'react-native';
import FlatListBookColumnItem from '../../components/flatListColumBookItem';
export default class SearchResult extends Component {
  render() {
    const {data} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatListBookColumnItem data={data.dataSearch} />
      </View>
    );
  }
}
