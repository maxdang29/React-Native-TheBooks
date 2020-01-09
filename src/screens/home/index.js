import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

import SectionListBook from '../../components/sectionListBook';
import {pushScreen} from '../../navigation/pushScreen';

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
    if (buttonId === 'searchButton') {
      pushScreen(this.props.componentId, 'search', null, null);
    }
  }

  render() {
    return (
      <View>
        <SectionListBook componentId={this.props.componentId} />
      </View>
    );
  }
}
