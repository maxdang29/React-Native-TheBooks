import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class SideBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      checked: false,
    };
  }
  onclickCheck = async name => {
    const {value, checked} = this.state;
    if (checked) {
      await this.setState({
        value: name,
        checked: false,
      });
    } else {
      await this.setState({
        value: name,
        checked: true,
      });
    }

    this.props.onclickCheck(this.state.value);
  };
  render() {
    const {name} = this.props;
    const {checked} = this.state;
    return (
      <TouchableOpacity
        onPress={() => {
          this.onclickCheck(name);
        }}>
        <View style={[styles.dropDownChild]}>
          <Text style={styles.text}>{name}</Text>
          <View
            style={styles.Check}
            style={[styles.Check, checked ? styles.checked : null]}>
            <Icon name="ios-checkmark" solid size={35} color="#fc9619" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    flex: 1,
  },
  dropDownChild: {
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 10,
    width: 500,
    flexDirection: 'row',
  },
  Check: {
    flex: 1,
    opacity: 0,
  },
  checked: {
    opacity: 1,
  },
});
