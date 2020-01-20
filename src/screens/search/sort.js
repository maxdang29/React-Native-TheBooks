import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {goAnotherScreen} from '../../navigation/navigation';
import {Navigation} from 'react-native-navigation';

const sortTitle = [
  {
    key: 'TotalReview',
    title: 'Xem nhiều',
  },
  {
    key: 'FavoriteCount',
    title: 'Đánh giá',
  },
  {
    key: 'Price',
    title: 'Giá',
  },
  {
    key: 'Title',
    title: 'Tên',
  },
];

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    const {componentId} = this.props;
    if (buttonId === 'back') {
      Navigation.dismissModal(componentId);
    }
  }
  sort = async key => {
    const {data} = this.props.value;
    const {componentId} = this.props;

    let arr = data;
    await arr.sort(function(a, b) {
      if (typeof a[key] === 'number') {
        return b[key] - a[key];
      } else {
        var charA = a[key].toUpperCase();
        var charB = b[key].toUpperCase();
        if (charA < charB) {
          return -1;
        }
        if (charA > charB) {
          return 1;
        }
        return 0;
      }
    });

    Navigation.dismissModal(componentId);

    goAnotherScreen(
      'searchResultFilter',
      {arr, componentId},
      'Tìm kiếm',
      true,
      true,
    );
  };

  render() {
    console.log('3333333333', this.props);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={sortTitle}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.sort(item.key)}>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 40,
  },
  text: {
    color: '#4a4a4a',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
});
