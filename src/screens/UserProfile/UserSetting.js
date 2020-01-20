import * as React from 'react';
import {View, StyleSheet, Share} from 'react-native';
import {Text, RowDirect} from '../../components';
import {Colors, Metrics} from '../../themes';
import {connect} from 'react-redux';
import * as loginActions from '../../redux/auth/Login/actions';
import {showQRCode} from '../../navigation/showQRCode';
import {Navigation} from 'react-native-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {showConfirmAlert} from '../../navigation/showConfirmAlert';
import Icons from 'react-native-vector-icons/thebook-appicon';
import startApp from '../../navigation/bottomTab';

class UserSetting extends React.Component {
  constructor(props) {
    super(props);
    this.navigationEventListener = Navigation.events().bindComponent(this);
    this.state = {componentId: this.props.componentId};
  }
  navigationButtonPressed({buttonId}) {
    const {componentId} = this.props;
    if (buttonId === 'back') {
      Navigation.dismissModal(componentId);
    }
  }
  onShowQRCode = () => {
    showQRCode('', this.props.UserData.QrCode, [
      {
        text: 'Submit',
        link: this.props.UserData.QrCodeUrl,
      },
    ]);
  };
  logout = async () => {
    this.props.logout();
    await AsyncStorage.clear();
    await AsyncStorage.setItem('start', 'startApp');
    setTimeout(() => {
      Navigation.dismissModal(this.state.componentId);
      startApp();
    }, 2000);
  };

  onLogout = () => {
    showConfirmAlert('Đăng xuất', 'Bạn chắc chắn muốn đăng xuất?', [
      {
        text: 'Không',
      },
      {
        text: 'Xác nhận',
        onPress: () => {
          this.logout();
        },
      },
    ]);
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message: 'The Books fake nè',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  onShowUserSetting = () => {
    Promise.all([
      Icons.getImageSource('ic-back', 20),
      Icons.getImageSource('ic-pencil', 20),
    ]).then(([back, edit]) => {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: 'EditUserProfile',
                passProps: {storeData: this.props.Data},
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
                        id: 'backEditUser',
                      },
                    ],
                    rightButtons: [
                      {
                        id: 'editUserProfile',
                        icon: edit,
                        color: Colors.black,
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
    return (
      <View style={{flex: 1}}>
        <RowDirect
          rowTitle="Thông tin cá nhân"
          icon="ic-profile"
          onPress={this.onShowUserSetting}
          textStyle={styles.rowTitle}
        />
        <RowDirect
          rowTitle="Đổi mật khẩu"
          icon="ic-password"
          onPress={this.goToChangePassword}
          textStyle={styles.rowTitle}
        />
        <RowDirect
          rowTitle="Phản hồi"
          icon="ic-feedback"
          onPress={this.goToChangePassword}
          textStyle={styles.rowTitle}
        />
        <RowDirect
          rowTitle="Lịch sử nâng cấp thành viên"
          icon="ic-history-membership"
          onPress={this.goToChangePassword}
          textStyle={styles.rowTitle}
        />
        <RowDirect
          rowTitle="Chia sẻ"
          icon="ic-share"
          onPress={this.onShare}
          textStyle={styles.rowTitle}
        />
        <RowDirect
          rowTitle="Đăng xuất"
          icon="ic-sign-out"
          onPress={this.onLogout}
          textStyle={styles.rowTitle}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    UserData: state.loginReducer.data,
    isLoading: state.loginReducer.loginLoading,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: data => dispatch(loginActions.login(data)),
    logout: () => dispatch(loginActions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserSetting);
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  rowTitle: {fontSize: 16},
});
