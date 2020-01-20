import React, {PureComponent} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Text, TouchableButton} from '../index';
import {Navigation} from 'react-native-navigation';

import {Colors, Metrics} from '../../themes';

export default class QRCodeOverlay extends PureComponent {
  onActionButtonPress = actionFunc => {
    this.dismiss();
    if (actionFunc) {
      actionFunc();
    }
  };

  dismiss = () => {
    Navigation.dismissOverlay(this.props.componentId);
  };

  render() {
    const actions = this.props.actions;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => this.onActionButtonPress(actions[0].onPress)}>
          <View style={styles.popup}>
            <Image
              source={{
                uri: actions[0].link,
              }}
              style={styles.qr}
              resizeMode="stretch"
            />
            <Text
              type="thin"
              sizeType="xMedium"
              color={Colors.black}
              center
              style={styles.message}>
              {this.props.message}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

QRCodeOverlay.propTypes = {
  componentId: PropTypes.string,
  title: PropTypes.string,
  actions: PropTypes.array,
};

QRCodeOverlay.defaultProps = {
  actions: [],
};

const styles = StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.shadow,
  },
  popup: {
    width: Metrics.screenWidth - 100,
    height: Metrics.screenHeight - 425,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    marginBottom: 10,
  },
  message: {
    marginVertical: 10,
  },
  rowButtonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  button: {
    width: (Metrics.screenWidth - 30) / 2 - 30,
  },
  centerButton: {
    width: Metrics.screenWidth - 60,
    alignSelf: 'center',
  },
  qr: {
    top: 10,
    height: Metrics.screenWidth / 2,
    width: Metrics.screenWidth / 2,
    // borderColor: 'white',
    // borderWidth: 1,
    bottom: 20,
  },
});
