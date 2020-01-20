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
//import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import EmptyView from '../../components/EmptyView';
import {Text} from '../../components';
import {Colors, Metrics} from '../../themes';
import {connect} from 'react-redux';
import * as loginActions from '../../redux/auth/Login/actions';
import Icons from 'react-native-vector-icons/thebook-appicon';
import {showQRCode} from '../../navigation/showQRCode';
import TouchableButton from '../../components/TouchableButton';

class ListUserBook extends React.Component {
  // _renderScene = SceneMap({
  //   first: () => <EmptyView message={'Không có sách nào '} />,
  //   second: () => <EmptyView message={'Không có sách nào '} />,
  //   third: () => <EmptyView message={'Không có sách nào '} />,
  // });
  constructor(props) {
    super(props);
    this.state = {borrowScreen: true, waitScreen: false, loveScreen: false};
  }

  renderEmptyView = () => {
    return (
      <View>
        <EmptyView />
      </View>
    );
  };
  onHoverButton = (borrowScreen, waitScreen, loveScreen) => {
    this.setState({
      borrowScreen: borrowScreen,
      waitScreen: waitScreen,
      loveScreen: loveScreen,
    });
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
        <View style={[{flex: 1, flexDirection: 'row'}, styles.shadow]}>
          <View style={{flex: 1}}>
            <TouchableButton
              title={'Đang mượn'}
              style={styles.button}
              buttonColor={
                this.state.borrowScreen ? Colors.lightBlue : Colors.white
              }
              onPress={() => this.onHoverButton(true, false, false)}
              textStyle={
                this.state.borrowScreen
                  ? styles.textButton
                  : styles.textButtonHover
              }
              loading={this.props.isLoading}
            />
          </View>
          <View style={{flex: 1}}>
            <TouchableButton
              title={'Đang chờ'}
              style={styles.button}
              buttonColor={
                this.state.waitScreen ? Colors.lightBlue : Colors.white
              }
              textStyle={
                this.state.waitScreen
                  ? styles.textButton
                  : styles.textButtonHover
              }
              loading={this.props.isLoading}
              onPress={() => this.onHoverButton(false, true, false)}
            />
          </View>
          <View style={{flex: 1}}>
            <TouchableButton
              title={'Yêu thích'}
              style={styles.button}
              buttonColor={
                this.state.loveScreen ? Colors.lightBlue : Colors.white
              }
              onPress={() => this.onHoverButton(false, false, true)}
              textStyle={
                this.state.loveScreen
                  ? styles.textButton
                  : styles.textButtonHover
              }
              loading={this.props.isLoading}
            />
          </View>
        </View>
        <View style={{flex: 6}}>
          <EmptyView message={'Không có sách nào '} />
        </View>
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

  textshadow: {
    color: '#FFFFFF',
    fontFamily: 'Times New Roman',
    textShadowColor: '#585858',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  indicator: {
    backgroundColor: Colors.lightBlue,
    width: Metrics.screenWidth / 3,
    height: 60,
  },

  activeTabTextColor: {
    color: Colors.white,
  },
  tabTextColor: {
    color: Colors.lightBlue,
  },
  button: {
    width: '102%',
    height: 50,
  },
  textButton: {fontSize: 13, fontFamily: 'SVN-ProximaNova'},
  textButtonHover: {
    fontSize: 13,
    fontFamily: 'SVN-ProximaNova',
    color: Colors.lightBlue,
  },
  shadow: {
    elevation: 7,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: 'white',
  },
});
