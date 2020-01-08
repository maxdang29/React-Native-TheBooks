import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  ScrollView,
  FlatList,
} from 'react-native';
import ColumBookItem from './ColumnBookItem';
import {offlineData} from '../utils/offlineData';
import {convertDataToSection} from '../utils/function';
import {connect} from 'react-redux';
import * as actionHome from '../redux/home/actions/action';

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
    this.props.getAllBook();
  }
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
              <Text style={styles.seeMore}>Xem thêm</Text>
            </View>
          )}
          renderItem={({item, index}) => {
            return (
              <FlatList
                data={item.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <ColumBookItem item={item} index={index} />
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
    getAllBook: () => {
      dispatch(actionHome.getAllBook());
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
  },
  title: {
    fontSize: 25,
    flex: 1,
  },
  seeMore: {
    fontSize: 15,
    marginRight: 20,
    color: 'blue',
    marginTop: 10,
  },
});
