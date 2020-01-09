import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import * as actionSideBar from '../redux/sideBar/actions/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import SideBarItem from '../components/sideBarItem';
import DropDownItem from 'react-native-drop-down-item';
const IC_ARR_DOWN = require('../../Image/downwards-pointer.png');
const IC_ARR_UP = require('../../Image/arr-up.png');

class SideBar extends Component {
  closeMenu = () => {
    Navigation.mergeOptions('sideBar', {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
  };

  componentDidMount() {
    this.props.getAllCategories();
  }

  filterCategory = data => {
    console.log('data category filter', data);
    return data.filter(item => {
      return item.SubCategories.length > 0;
    });
  };

  render() {
    const {categoriesData} = this.props;
    const filterCategory = this.filterCategory(categoriesData);
    return (
      <View style={[styles.container]}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={this.closeMenu} style={styles.closeButton}>
            <Icon name="ios-close" solid size={35} />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Thể loại</Text>
          <TouchableOpacity style={styles.reloadButton}>
            <Icon name="ios-refresh" size={30} solid />
          </TouchableOpacity>
        </View>

        <View>
          <ScrollView>
            {filterCategory
              ? filterCategory.map((param, i) => {
                  return (
                    <DropDownItem
                      key={i}
                      style={[styles.dropDownItem, styles.border]}
                      contentVisible={false}
                      invisibleImage={IC_ARR_DOWN}
                      visibleImage={IC_ARR_UP}
                      header={
                        <View style={[styles.header, styles.dropDown]}>
                          <Text style={styles.text}>{param.Name}</Text>
                        </View>
                      }>
                      <View>
                        {param.SubCategories.map((element, j) => {
                          return (
                            <SideBarItem name={element.Name} key={j}>
                              >
                            </SideBarItem>
                          );
                        })}
                      </View>
                    </DropDownItem>
                  );
                })
              : null}
            <View />

            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.textSearch}>Tìm kết quả</Text>
            </TouchableOpacity>
            <View style={styles.space}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    categoriesData: store.SideBarReducers.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCategories: () => {
      dispatch(actionSideBar.getAllCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginBottom: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    height: 70,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  closeButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  reloadButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  dropDown: {
    marginLeft: 20,
    marginRight: 10,
  },

  dropDownItem: {
    marginBottom: 15,
    marginTop: 15,
  },
  header: {
    flex: 1,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
  },

  border: {
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5,
  },
  searchButton: {
    backgroundColor: '#fc9619',
    height: 60,
    marginBottom: 50,

    justifyContent: 'center',
  },
  textSearch: {
    textAlign: 'center',
    fontFamily: 'SVN-Futura',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  space: {
    height: 40,
  },
});
