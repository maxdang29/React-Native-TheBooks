import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ListUserBook from '../UserBook/ListUserBook';
import {Text} from '../../components';
import {Colors, Metrics} from '../../themes';
import {connect} from 'react-redux';
import * as loginActions from '../../redux/auth/Login/actions';
import {showQRCode} from '../../navigation/showQRCode';
import Icons from 'react-native-vector-icons/thebook-appicon';
import EmptyView from '../../components/EmptyView';
import {Navigation} from 'react-native-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Login from '../Authentication/Login';

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
  };

  _renderScene = SceneMap({
    first: ListUserBook,
    second: () => <EmptyView message={'Không có sách nào '} />,
    third: () => (
      <EmptyView message={'Bạn chưa là thành viên của '} TheBooks={true} />
    ),
  });

  onShowQRCode = () => {
    const {UserData, userData} = this.props;
    showQRCode('', UserData ? JSON.parse(UserData).QrCode : userData.QrCode, [
      {
        text: 'Submit',
        link: UserData ? JSON.parse(UserData).QrCodeUrl : userData.QrCodeUrl,
      },
    ]);
  };

  onShowSetting = () => {
    Promise.all([
      Icons.getImageSource('ic-back', 25),
      Icons.getImageSource('ic-order', 30),
    ]).then(([back, orderHistory]) => {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: 'UserSetting',
                options: {
                  topBar: {
                    title: {
                      text: 'Cài đặt thông tin',
                      fontSize: 22,
                      fontFamily: 'SVN-ProximaNova',
                      alignment: 'center',
                    },
                    leftButtons: [
                      {
                        icon: back,
                        color: 'black',
                        id: 'back',
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      });
    });
  };

  render() {
    return this.props.isRender === false ? (
      <Login />
    ) : this.props.token ? (
      <View style={{flex: 1}}>
        <View style={{flex: 2}} />

        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri:
              'https://lh3.googleusercontent.com/-SZN4fL4-8rI/XhazmUR5f_I/AAAAAAAABgg/HBl3APUI3hg-WBvfwIbeFTl3tYvdbTEegCK8BGAsYHg/s0/2020-01-08.jpg',
          }}
          blurRadius={3}>
          <View style={styles.profileContainer}>
            <View style={styles.QrCodeContainer}>
              <TouchableWithoutFeedback
                style={{marginHorizontal: 50}}
                onPress={this.onShowQRCode}>
                <View style={styles.QRContainer}>
                  <Icons
                    name="code"
                    size={18}
                    color="black"
                    style={styles.QRIcon}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.settingContainer}>
              <TouchableWithoutFeedback
                style={{marginHorizontal: 50}}
                onPress={this.onShowSetting}>
                <Icons
                  name="ic-setting"
                  size={24}
                  color="white"
                  style={styles.settingIcon}
                />
              </TouchableWithoutFeedback>
            </View>

            <View>
              <Image
                source={{
                  uri:
                    'https://lh3.googleusercontent.com/-SZN4fL4-8rI/XhazmUR5f_I/AAAAAAAABgg/HBl3APUI3hg-WBvfwIbeFTl3tYvdbTEegCK8BGAsYHg/s0/2020-01-08.jpg',
                }}
                style={styles.avatar}
              />
            </View>

            <View style={{marginVertical: 12}}>
              <Text
                style={styles.textshadow}
                type="bold"
                color={Colors.white}
                sizeType="large">
                {this.props.UserData
                  ? JSON.parse(this.props.UserData).FullName
                  : this.props.userData.FullName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 19,
              }}>
              <TouchableWithoutFeedback
                style={{marginHorizontal: 50}}
                onPress={this.onShowQRCode}>
                <View style={styles.upGrateContainer}>
                  <Text
                    style={styles.textshadow}
                    type="light"
                    color={Colors.white}
                    sizeType="mini">
                    Nâng cấp
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.divideContainer}>
                <Text
                  style={styles.textshadow}
                  type="light"
                  color={Colors.white}
                  sizeType="large">
                  |
                </Text>
              </View>
              <View style={styles.totalPointContainer}>
                <Icons
                  name="star"
                  size={15}
                  color="#EC9921"
                  style={styles.totalPoint}
                />
              </View>
              <Text
                style={[
                  styles.textshadow,
                  {marginHorizontal: 5, marginVertical: 5},
                ]}
                type="light"
                color={Colors.white}
                sizeType="mini">
                {this.props.UserData
                  ? JSON.parse(this.props.UserData).TotalPoint
                  : this.props.userData.TotalPoint}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <TabView
          style={{flex: 3}}
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={styles.indicator}
              tabStyle={styles.bubble}
              labelStyle={styles.label}
              style={{backgroundColor: 'transparent'}}
            />
          )}
          swipeEnabled={true}
        />
      </View>
    ) : this.props.isChangeBottomTab ? (
      <View style={{flex: 1}}>
        <View style={{flex: 2}} />

        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri:
              'https://lh3.googleusercontent.com/-SZN4fL4-8rI/XhazmUR5f_I/AAAAAAAABgg/HBl3APUI3hg-WBvfwIbeFTl3tYvdbTEegCK8BGAsYHg/s0/2020-01-08.jpg',
          }}
          blurRadius={3}>
          <View style={styles.profileContainer}>
            <View style={styles.QrCodeContainer}>
              <TouchableWithoutFeedback
                style={{marginHorizontal: 50}}
                onPress={this.onShowQRCode}>
                <View style={styles.QRContainer}>
                  <Icons
                    name="code"
                    size={18}
                    color="black"
                    style={styles.QRIcon}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.settingContainer}>
              <TouchableWithoutFeedback
                style={{marginHorizontal: 50}}
                onPress={this.onShowSetting}>
                <Icons
                  name="ic-setting"
                  size={24}
                  color="white"
                  style={styles.settingIcon}
                />
              </TouchableWithoutFeedback>
            </View>

            <View>
              <Image
                source={{
                  uri:
                    'https://lh3.googleusercontent.com/-SZN4fL4-8rI/XhazmUR5f_I/AAAAAAAABgg/HBl3APUI3hg-WBvfwIbeFTl3tYvdbTEegCK8BGAsYHg/s0/2020-01-08.jpg',
                }}
                style={styles.avatar}
              />
            </View>

            <View style={{marginVertical: 12}}>
              <Text
                style={styles.textshadow}
                type="bold"
                color={Colors.white}
                sizeType="large">
                {this.props.UserData
                  ? JSON.parse(this.props.UserData).FullName
                  : this.props.userData.FullName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 19,
              }}>
              <TouchableWithoutFeedback
                style={{marginHorizontal: 50}}
                onPress={this.onShowQRCode}>
                <View style={styles.upGrateContainer}>
                  <Text
                    style={styles.textshadow}
                    type="light"
                    color={Colors.white}
                    sizeType="mini">
                    Nâng cấp
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.divideContainer}>
                <Text
                  style={styles.textshadow}
                  type="light"
                  color={Colors.white}
                  sizeType="large">
                  |
                </Text>
              </View>
              <View style={styles.totalPointContainer}>
                <Icons
                  name="star"
                  size={15}
                  color="#EC9921"
                  style={styles.totalPoint}
                />
              </View>
              <Text
                style={[
                  styles.textshadow,
                  {marginHorizontal: 5, marginVertical: 5},
                ]}
                type="light"
                color={Colors.white}
                sizeType="mini">
                {this.props.UserData
                  ? JSON.parse(this.props.UserData).TotalPoint
                  : this.props.userData.TotalPoint}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <TabView
          style={{flex: 3}}
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={styles.indicator}
              tabStyle={styles.bubble}
              labelStyle={styles.label}
              style={{backgroundColor: 'transparent'}}
            />
          )}
          swipeEnabled={true}
        />
      </View>
    ) : (
      <Login />
    );
  }
}
const mapStateToProps = state => {
  return {
    isChangeBottomTab: state.loginReducer.changeBottomTab,
    userData: state.loginReducer.data,
    isRender: state.loginReducer.reRender,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: data => dispatch(loginActions.login(data)),
  };
};
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
    height: 100,
    width: 100,
    borderRadius: 100,
    margin: 10,
    borderColor: 'white',
    borderWidth: 1,
    bottom: 5,
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
  upGrateContainer: {
    width: 75,
    height: 33,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalPoint: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FEBC4D',
    paddingLeft: 4,
    paddingTop: 2,
    paddingBottom: 1.5,
  },
  indicator: {
    backgroundColor: 'white',
    width: 55,
    height: 3,
    marginHorizontal: Metrics.screenWidth / 8 - 15,
    marginBottom: 4,
  },
  totalPointContainer: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 23,
    backgroundColor: '#FEE28E',
  },
  imageBackground: {
    width: '100%',
    height: '69%',
    position: 'absolute',
    zIndex: 10,
  },
  QRContainer: {
    backgroundColor: 'white',
    height: 31,
    width: 31,
    borderRadius: 150,
    margin: 11,
    bottom: 22,
  },
  QRIcon: {
    height: 30,
    width: 30,
    borderRadius: 150,
    left: 6,
    top: 6,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    top: 100,
    position: 'absolute',
    left: 0,
    width: '100%',
  },
  settingIcon: {
    height: 30,
    width: 30,
    borderRadius: 150,
    margin: 11,
    bottom: 20,
  },
  divideContainer: {
    alignItems: 'center',
    width: 20,
    top: 2,
    marginHorizontal: 7,
  },
});
