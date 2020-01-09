import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SideBarItem extends Component {
  render() {
    const {name} = this.props;
    return (
      <View style={[styles.subCategories, styles.dropDownChild]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
  },
  dropDownChild: {
    marginLeft: 30,
  },
  subCategories: {
    marginBottom: 10,
    marginTop: 10,
    width: 500,
  },
});
