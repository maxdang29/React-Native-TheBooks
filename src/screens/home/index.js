import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
export default class Home extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: '',
        },
        leftButtons: [
          {
            icon: require('../../../Image/menu.png'),
            id: 'sideMenu',
          },
        ],
      },
    };
  }
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
