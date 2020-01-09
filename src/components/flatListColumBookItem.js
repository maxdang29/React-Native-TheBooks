import React, {Component} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import ColumBookItem from '../components/ColumnBookItem';

export default class FlatListBookColumnItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;

    return (
      <View>
        <SafeAreaView>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <ColumBookItem item={item} componentId={this.props.componentId} />
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}
