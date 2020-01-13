import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import * as actionBooks from '../../redux/home/actions/action';
import {pushScreen} from '../../navigation/pushScreen';
import {goAnotherScreen} from '../../navigation/navigation';
import {Navigation} from 'react-native-navigation';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  static options(passProps) {
    return {
      topBar: {
        drawBehind: true,
        visible: true,
        animate: false,
      },
    };
  }

  componentDidMount() {
    this.props.getAllBook();
    this.props.getBookSuggestion();
  }

  onchangeText = text => {
    this.setState({
      value: text.text,
    });
  };
  moveToDetailBookScreen = data => {
    const {componentId} = this.props;
    goAnotherScreen('BookDetail', data, 'Chi tiết');
  };

  filterBook = (data, text) => {
    return data.filter(item => {
      return item.Title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    });
  };
  onSearch = data => {
    const {componentId} = this.props;
    pushScreen(componentId, 'searchResult', data, 'Tìm kiếm');
  };
  render() {
    const {searchSuggestion, bookData} = this.props;
    const dataSearch = this.filterBook(bookData, this.state.value);
    const data = dataSearch ? dataSearch : searchSuggestion;

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            onChangeText={text => {
              this.onchangeText({text});
            }}
            style={styles.input}
            placeholder="Hãy nhập tên sách mà bạn muốn tim !"
            type="default"
            onSubmitEditing={() => this.onSearch({dataSearch})}
            size={40}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.onSearch({dataSearch});
            }}>
            <Icon name="ios-search" solid size={35} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <SafeAreaView style={styles.flatList}>
            <Text style={[styles.text, styles.keyWordCommon]}>
              Các từ khóa thông dụng
            </Text>
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.Id}
              renderItem={({item}) => (
                <Text
                  style={styles.textItem}
                  onPress={() => {
                    this.moveToDetailBookScreen(item);
                  }}>
                  {item.Title}
                </Text>
              )}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    bookData: store.homeReducer.search,
    searchSuggestion: store.homeReducer.searchSuggestion,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllBook: () => {
      dispatch(actionBooks.getAllBook());
    },
    getBookSuggestion: () => {
      dispatch(actionBooks.getBookSuggestion());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    margin: 10,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 20,
    fontSize: 18,
  },
  searchButton: {
    width: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  text: {
    fontSize: 20,
  },
  keyWordCommon: {
    color: '#ababab',
    marginBottom: 15,
    marginTop: 15,
  },
  textItem: {
    fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    fontSize: 18,
    marginBottom: 10,
  },
  flatList: {
    marginLeft: 20,
  },
});
