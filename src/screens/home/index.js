import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

import SectionListBook from '../../components/sectionListBook';

export default class Home extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'sideMenu') {
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
  }

  render() {
    return (
      <View>
        <SectionListBook />
      </View>
    );
  }
}
