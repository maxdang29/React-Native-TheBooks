import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import * as actionBooks from '../../redux/home/actions/action';
import FlatListBookColumnItem from '../../components/flatListColumBookItem';
import {Navigation} from 'react-native-navigation';
import Icons from 'react-native-vector-icons/thebook-appicon';

import {goAnotherScreen} from '../../navigation/navigation';

class SearchResultFilter extends Component {
  constructor(props) {
    super(props);
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }
  componentDidMount() {
    this.props.getAllBook();
  }
  navigationButtonPressed({buttonId}) {
    const {componentId} = this.props;
    if (buttonId === 'back') {
      Navigation.dismissModal(componentId);
    }
  }
  filterBookFollowCategory = () => {
    const {value, bookData} = this.props;

    let array = [];
    bookData.map(element => {
      element.Categories.map(item => {
        if (value.includes(item.Name)) {
          array.push(element);
        }
      });
    });
    return array;
  };
  render() {
    const {value, passPropsOption, bookData, loading} = this.props;
    const bookFilter = this.filterBookFollowCategory();
    const data = passPropsOption ? value : bookFilter;
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.containerItem, styles.left]}
            onPress={() => goAnotherScreen('sideBar', null, '', false)}>
            <Text style={[styles.titleFilter]}>Thể loại</Text>
            <Icons name="filter" solid size={18} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.containerItem, styles.content]}
            onPress={() => goAnotherScreen('sort', data, 'Sắp xếp', true)}>
            <Text style={[styles.titleFilter]}>Sắp xếp</Text>
            <Icons name="select" solid size={18} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.right}>
            <Icons
              name="ic-filter-change-2"
              solid
              size={18}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={{marginBottom: 170}}>
            <FlatListBookColumnItem data={data} row={true} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 25,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  containerItem: {
    flexDirection: 'row',
    marginRight: 40,
    alignItems: 'center',
    borderRightColor: 'gray',
    borderRightWidth: 0.5,
    paddingRight: 10,
    paddingLeft: 10,
    height: 50,
  },
  titleFilter: {
    flex: 1,
  },
  icon: {
    alignItems: 'center',
    margin: 5,
  },
  left: {
    flex: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  content: {
    flex: 1,
  },
  loading: {
    color: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = store => {
  return {
    bookData: store.homeReducer.search,
    loading: store.homeReducer.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllBook: () => {
      dispatch(actionBooks.getAllBook());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultFilter);
