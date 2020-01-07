import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Home extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  static options(passProps) {}
  navigationButtonPressed({buttonId}) {
    try {
      Navigation.mergeOptions('sideBar', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, Home!</Text>
      </View>
    );
  }
}
