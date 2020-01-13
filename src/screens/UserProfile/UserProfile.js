import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import {Text, TouchableButton} from '../../components';
import {Navigation} from 'react-native-navigation';
import {Colors} from '../../themes';
import {connect} from 'react-redux';
import * as loginActions from '../../redux/auth/Login/actions';
import {BackHandler} from 'react-native';
import {showConfirmAlert} from '../../navigation/showConfirmAlert';
import {showQRCode} from '../../navigation/showQRCode';
import Icons from 'react-native-vector-icons/thebook-appicon';

class UserProfile extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'first',
        title: 'Sách của bạn',
      },
      {
        key: 'second',
        title: 'Sách yêu cầu',
      },
      {
        key: 'third',
        title: 'Gói thành viên',
      },
    ],
    ready: false,
    SlideInLeft: new Animated.Value(0),
    slideUpValue: new Animated.Value(0),
    fadeValue: new Animated.Value(1),
  };
  _renderScene = SceneMap({
    first: Login,
    second: Login,
    third: Register,
  });

  onShowModal = () => {
    showQRCode('', this.props.UserData.QrCode, [
      {
        text: 'Submit',
        link: this.props.UserData.QrCodeUrl,
      },
    ]);
  };

  render() {
    let {slideUpValue, fadeValue, SlideInLeft} = this.state;
    //console.log('QR', this.props.UserData.data);
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2}} />

        <ImageBackground
          style={{
            width: '100%',
            height: '70%',
            position: 'absolute',
            zIndex: 10,
          }}
          source={{
            uri:
              'https://lh3.googleusercontent.com/-SZN4fL4-8rI/XhazmUR5f_I/AAAAAAAABgg/HBl3APUI3hg-WBvfwIbeFTl3tYvdbTEegCK8BGAsYHg/s0/2020-01-08.jpg',
          }}
          blurRadius={3}>
          <View style={styles.profileContainer}>
            <View style={styles.QrCodeContainer}>
              <TouchableWithoutFeedback
                style={{marginHorizontal: 50}}
                onPress={this.onShowModal}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 31,
                    width: 31,
                    borderRadius: 150,
                    margin: 11,
                    bottom: 22,
                  }}>
                  <Icons
                    name="code"
                    size={18}
                    color="black"
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 150,
                      left: 6,
                      top: 6,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                top: 100,
                position: 'absolute',
                left: 0,
                width: '100%',
              }}>
              <TouchableWithoutFeedback
                style={{marginHorizontal: 50}}
                onPress={this.onShowModal}>
                <Icons
                  name="ic-setting"
                  size={24}
                  color="white"
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 150,
                    margin: 11,
                    // borderColor: 'white',
                    // borderWidth: 1,
                    bottom: 20,
                  }}
                />
              </TouchableWithoutFeedback>
            </View>

            <View>
              <Image
                source={{
                  uri:
                    // this.props.UserData.QrCodeUrl ||
                    'https://lh3.googleusercontent.com/-SZN4fL4-8rI/XhazmUR5f_I/AAAAAAAABgg/HBl3APUI3hg-WBvfwIbeFTl3tYvdbTEegCK8BGAsYHg/s0/2020-01-08.jpg',
                }}
                style={styles.avatar}
              />
            </View>

            <View>
              <Text
                style={styles.textshadow}
                type="bold"
                color={Colors.white}
                sizeType="large">
                Nguyen Minh Tan
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* </View> */}
        <TabView
          style={{flex: 3}}
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{
                backgroundColor: 'white',
                width: 55,
                height: 3,
                marginHorizontal: 30,
                marginBottom: 1,
              }}
              tabStyle={styles.bubble}
              labelStyle={styles.label}
              style={{backgroundColor: 'transparent'}}
            />
          )}
          // render
          // lazy={true}
          // scrollEnabled={true}
          swipeEnabled={true}
          // bounces={true}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    UserData: state.loginReducer.data,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    //register: data => dispatch(registerAction.register(data)),
    login: data => dispatch(loginActions.login(data)),
  };
};
// export default UserProfile;
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  label: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 13,
  },
  bubble: {
    backgroundColor: 'transparent',
    top: 3,
  },

  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

    bottom: 75,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 100,
    margin: 10,
    borderColor: 'white',
    borderWidth: 1,
    bottom: 20,
  },
  qr: {
    height: 30,
    width: 30,
    borderRadius: 150,
    margin: 10,
    bottom: 20,
  },
  infoUser: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textshadow: {
    color: '#FFFFFF',
    fontFamily: 'Times New Roman',
    textShadowColor: '#585858',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  button: {flex: 1, paddingHorizontal: 110, justifyContent: 'center'},
  textButton: {fontSize: 16, fontFamily: 'SVN-ProximaNova'},
  QrCodeContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    top: 100,
    position: 'absolute',
    left: 0,
  },
});
