import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        visible: false,
      },
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://thebooks.vn/wp-content/uploads/2018/04/Logo-The-Books_bo_300.png',
          }}
          style={{width: 220, height: 60}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
