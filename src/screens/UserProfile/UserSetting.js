import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {RowDirect} from '../../components';
import {connect} from 'react-redux';
import * as loginActions from '../../redux/auth/Login/actions';
import {showQRCode} from '../../navigation/showQRCode';
import {Navigation} from 'react-native-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {showConfirmAlert} from '../../navigation/showConfirmAlert';

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
    }, 3000);
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

  render() {
    return (
      <View style={{flex: 1}}>
        <RowDirect
          rowTitle="Thông tin cá nhân"
          icon="ic-profile"
          onPress={this.goToChangePassword}
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
          onPress={this.goToChangePassword}
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
