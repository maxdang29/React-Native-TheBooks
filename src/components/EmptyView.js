import React, {PureComponent} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Text, TouchableButton} from '../components/index';
import {Navigation} from 'react-native-navigation';

import {Colors, Metrics} from '../themes';

export default class EmptyView extends PureComponent {
  render() {
    const message = this.props.message;
    const TheBooks = this.props.TheBooks;
    return (
      <View style={styles.container}>
        <Text
          type="thin"
          sizeType="xMedium"
          color={Colors.black}
          center
          style={[styles.message]}>
          {message}
        </Text>
        {TheBooks ? (
          <Text
            style={{fontWeight: 'bold'}}
            sizeType="xMedium"
            color={Colors.lightBlue}
            center>
            The Books
          </Text>
        ) : null}
      </View>
    );
  }
}

EmptyView.propTypes = {
  message: PropTypes.string,
};

EmptyView.defaultProps = {
  message: 'Khôg có sách nào',
};

const styles = StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    flex: 1,
  },
});
