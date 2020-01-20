import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
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
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) =>
          item.Id + Math.floor(Math.random() * 100)
        }
        renderItem={({item}) =>
          row ? (
            <RowBookItem item={item} />
          ) : (
            <View style={styles.item}>
              <ColumBookItem item={item} componentId={this.props.componentId} />
            </View>
          )
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  item: {
    marginLeft: 15,
    marginRight: 15,
  },
});
