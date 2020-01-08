import React, {Component} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import ColumBookItem from '../../components/ColumnBookItem';

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
   

    return (
      <View>
        <SafeAreaView>
          <FlatList
            data={bookData}
            numColumns={2}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <ColumBookItem item={item} componentId={this.props.componentId} />
            )}
          />
        </SafeAreaView>
        <Text>Heloo</Text>
      </View>
    );
  }
}
