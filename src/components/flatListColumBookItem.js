import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import ColumBookItem from '../components/ColumnBookItem';
import RowBookItem from '../components//RowBookItem';

export default class FlatListBookColumnItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data, row} = this.props;

    return (
      <FlatList
        data={data}
        numColumns={row ? 1 : 2}
        keyExtractor={(item, index) =>
          item.Id + Math.floor(Math.random() * 100)
        }
        renderItem={({item}) =>
          row ? (
            <RowBookItem item={item} />
          ) : (
            <ColumBookItem item={item} componentId={this.props.componentId} />
          )
        }
      />
    );
  }
}
