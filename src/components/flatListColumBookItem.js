import React, {Component} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import ColumBookItem from '../components/ColumnBookItem';
import RowBookItem from '../components//RowBookItem';

export default class FlatListBookColumnItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data, row} = this.props;

    return (
      <View>
        <SafeAreaView>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item, index) => index}
            renderItem={({item}) =>
              row ? (
                <ColumBookItem
                  item={item}
                  componentId={this.props.componentId}
                />
              ) : (
                <RowBookItem item={item} componentId={this.props.componentId} />
              )
            }
          />
        </SafeAreaView>
      </View>
    );
  }
}
