import React, {Component} from 'react';
import {Text, View, StyleSheet, SectionList, FlatList} from 'react-native';
import ColumBookItem from './ColumnBookItem';
import {convertDataToSection} from '../utils/function';
import {connect} from 'react-redux';
import * as actionHome from '../redux/home/actions/action';
import {pushScreen} from '../navigation/pushScreen';

const NAME = {
  NewBooks: 'Sách Mới',
  HotTrendBooks: 'Sách Được Yêu thích',
  MostBorrowBooks: 'Sách Mượn Nhiều',
};

class SectionListBook extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCmsHomeSummary();
  }

  moveToSeeMoreScreen = (data, title) => {
    pushScreen(this.props.componentId, 'seeMore', data, title);
  };

  render() {
    const {bookData} = this.props;
    return (
      <View style={styles.container}>
        <SectionList
          sections={bookData}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <Text
                style={styles.seeMore}
                onPress={() => this.moveToSeeMoreScreen(bookData, title)}>
                Xem thêm
              </Text>
            </View>
          )}
          renderItem={({item, index}) => {
            return (
              <FlatList
                data={item.data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => {
                  return item.Id.toString() + Date.now().toString();
                }}
                renderItem={({item, index}) => (
                  <ColumBookItem item={item} key={Date.now().toString()} />
                )}
              />
            );
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = store => {
  return {
    bookData: convertDataToSection(store.homeReducer.data, NAME),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCmsHomeSummary: () => {
      dispatch(actionHome.getCmsHomeSummary());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionListBook);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  header: {
    marginLeft: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    flex: 1,
  },
  seeMore: {
    fontSize: 15,
    marginRight: 20,
    color: 'blue',
    marginTop: 10,
  },
});
