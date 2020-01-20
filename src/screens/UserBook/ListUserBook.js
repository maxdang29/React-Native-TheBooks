import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import EmptyView from '../../components/EmptyView';
import {Text} from '../../components';
import {Colors, Metrics} from '../../themes';
import {connect} from 'react-redux';
import * as loginActions from '../../redux/auth/Login/actions';
import {showQRCode} from '../../navigation/showQRCode';

class ListUserBook extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'first',
        title: 'Đang mượn',
      },
      {
        key: 'second',
        title: 'Đang chờ',
      },
      {
        key: 'third',
        title: 'Yêu thích',
      },
    ],
  };
  _renderScene = SceneMap({
    first: () => <EmptyView message={'Không có sách nào '} />,
    second: () => <EmptyView message={'Không có sách nào '} />,
    third: () => <EmptyView message={'Không có sách nào '} />,
  });

  renderEmptyView = () => {
    return (
      <View>
        <EmptyView />
      </View>
    );
  };

  onShowQRCode = () => {
    showQRCode('', this.props.UserData.QrCode, [
      {
        text: 'Submit',
        link: this.props.UserData.QrCodeUrl,
      },
    ]);
  };
  renderLabel = ({route, focused, color}) => {
    return (
      <View>
        <Text
          style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}>
          {route.title}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
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
              renderLabel={this.renderLabel}
              style={{backgroundColor: Colors.white}}
            />
          )}
          swipeEnabled={true}
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
    login: data => dispatch(loginActions.login(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListUserBook);
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 13,
  },
  bubble: {
    backgroundColor: 'transparent',
    top: 3,
    height: 54,
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
    backgroundColor: Colors.lightBlue,
    width: Metrics.screenWidth / 3,
    height: 60,
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
  activeTabTextColor: {
    color: Colors.white,
  },
  tabTextColor: {
    color: Colors.lightBlue,
  },
});
