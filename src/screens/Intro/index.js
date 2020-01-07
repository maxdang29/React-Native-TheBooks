import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Colors, Images} from '../../themes';
import IntroViewer from './IntroViewer';
import {Text, Swiper, TouchableButton} from '../../components/index';
import pushScreen from '../../navigation/pushScreen';

class Intro extends Component {
  static options(passProps) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }
  constructor(props) {
    super(props);
    this.state = {showButton: false};
  }

  goToSignIn = () => {
    pushScreen(
      this.props.componentId,
      'navigation.playground.WelcomeScreen',
      {},
      'Sign In',
    );
  };

  goToSignUp = () => {
    pushScreen(
      this.props.componentId,
      'navigation.playground.WelcomeScreen',
      {},
      'Sign Up',
    );
  };

  render() {
    const INTROS = [
      {
        id: 1,
        imageSource: Images.intro1,
        title: 'Tìm sách yêu thích',
        subTitle:
          'Rất nhiều cuốn sách hay và chương trình thú vị được tích hợp trên hệ thống.',
        startButton: false,
      },
      {
        id: 2,
        imageSource: Images.intro2,
        title: 'Lưu vào giỏ và đặt sách',
        subTitle:
          'Sách sẽ được giữ trong 2 giờ đồng hồ\n Hãy chắc chắn là bạn đến nhận kịp giờ.',
        startButton: false,
      },
      {
        id: 3,
        imageSource: Images.intro3,
        title: 'Tận hưởng cuốn sách',
        subTitle:
          'Chọn một nơi yêu thích và tận hưởng cuốn sách mà yêu thích thôi nào.',
        startButton: true,
      },
    ];
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.topContainer}>
          <Swiper style={styles.wrapper} activeDotColor={Colors.primary}>
            {INTROS.map(item => {
              return <IntroViewer data={item} key={item.id} />;
            })}
          </Swiper>
        </View>

        {/* <View style={styles.buttonGroup}>
            <TouchableButton
              title={'Bắt đầu'}
              style={styles.button}
              buttonColor={Colors.primary}
              onPress={this.goToSignIn}
              textStyle={styles.textButton}
            />
          </View> */}
        {/* <Text
            type="light"
            color={Colors.black}
            sizeType="xMedium"
            style={styles.txtContinue}
            underline
          /> */}
      </SafeAreaView>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => ({});

export default Intro;

const styles = StyleSheet.create({
  wrapper: {},
  txtContinue: {
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 145,
    borderRadius: 5,
    height: 45,
  },
  textButton: {fontSize: 18},
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
  },
  topContainer: {
    flex: 4,
    backgroundColor: Colors.white,
  },
});
