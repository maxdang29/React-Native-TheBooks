import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, TouchableButton} from '../../components';
import {Colors} from '../../themes';
import startApp from '../../navigation/bottomTab';
import AsyncStorage from '@react-native-community/async-storage';

export default class IntroViewer extends React.PureComponent {
  goToHome = async () => {
    AsyncStorage.setItem('start', 'startApp');
    startApp();
  };
  render() {
    const {data} = this.props;
    const {imageSource, title, subTitle, startButton} = data;
    return (
      <View style={styles.slide}>
        <View style={{flex: 2.5, justifyContent: 'flex-end'}}>
          <Image
            source={imageSource}
            style={{
              height: 230,
              width: 300,
            }}
          />
        </View>
        <View style={{flex: 2.5}}>
          <Text
            type="regular"
            color={Colors.black}
            sizeType="xMedium"
            style={styles.title}>
            {title}
          </Text>
          <Text
            type="regular"
            color={Colors.black}
            sizeType="xMedium"
            style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
        {startButton === true ? (
          <View style={styles.buttonGroup}>
            <TouchableButton
              title={'Bắt đầu'}
              style={styles.button}
              buttonColor={Colors.primary}
              onPress={this.goToHome}
              textStyle={styles.textButton}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 25,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 22,
  },
  subTitle: {
    paddingHorizontal: 10,
    lineHeight: 27,
    marginTop: 15,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 19,
    color: Colors.darkGray,
  },
  buttonGroup: {
    position: 'absolute',
    flexDirection: 'column-reverse',
    bottom: 80,
  },
  button: {
    width: 145,
    borderRadius: 5,
    height: 45,
  },
  textButton: {fontSize: 18},
});
