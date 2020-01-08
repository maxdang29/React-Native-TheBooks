import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import DropDownItem from 'react-native-drop-down-item';
const IC_ARR_DOWN = require('../../Image/downwards-pointer.png');
const IC_ARR_UP = require('../../Image/arr-up.png');
import {offlineData} from '../utils/offlineData';

const Categories = offlineData.Data.References.Categories;
export default class SideBar extends Component {
  closeMenu = () => {
    Navigation.mergeOptions('sideBar', {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
  };
  render() {
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

        <View style={styles.dropDown}>
          <ScrollView style={{alignSelf: 'stretch'}}>
            {offlineData
              ? Categories.map((param, i) => {
                  return (
                    <DropDownItem
                      key={i}
                      style={[styles.dropDownItem, styles.border]}
                      contentVisible={false}
                      invisibleImage={IC_ARR_DOWN}
                      visibleImage={IC_ARR_UP}
                      header={
                        <View style={[styles.header]}>
                          <Text style={styles.text}>{param.Name}</Text>
                        </View>
                      }>
                      <View>
                        {param.SubCategories.map((element, j) => {
                          return (
                            <View style={[styles.subCategories]} key={j}>
                              <Text style={styles.text}>{element.Name}</Text>
                            </View>
                          );
                        })}
                      </View>
                    </DropDownItem>
                  );
                })
              : null}
            <View />
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
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
  subCategories: {
    marginBottom: 10,
    marginTop: 10,
    width: 500,
  },
  border: {
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5,
  },
});
