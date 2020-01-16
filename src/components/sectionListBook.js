import React, {Component} from 'react';
import {Text, View, StyleSheet, SectionList, FlatList} from 'react-native';
import ColumBookItem from './ColumnBookItem';
import {connect} from 'react-redux';
import {pushScreen} from '../navigation/pushScreen';

class SectionListBook extends Component {
  constructor(props) {
    super(props);
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
                  <View style={styles.item}>
                    <ColumBookItem item={item} key={Date.now().toString()} />
                  </View>
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionListBook);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 20,
  },
  header: {
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
  item: {
    marginRight: 20,
  },
});
