import React from 'react';
import SpecialInput from '../../components/SpecialInput';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import TouchableButton from '../../components/TouchableButton';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import * as registerActions from '../../redux/auth/Register/actions';
//import * as loginAction from '../../Redux/Authentication/Login/actions';
import {connect} from 'react-redux';
import {Colors} from '../../themes';

class Register extends React.Component {
  static options(passProps) {
    return {
      topBar: {},
    };
  }
  constructor(props) {
    super(props);
    this.navigationEventListener = Navigation.events().bindComponent(this);
    this.state = {componentId: this.props.componentId};
  }
  navigationButtonPressed({buttonId}) {
    const {componentId} = this.props;
    if (buttonId === 'backRegister') {
      Navigation.dismissModal(componentId);
    }
  }

  focusNextField(nextField) {
    this[nextField].focus();
  }
  onLogIn = () => {
    if (!this.name.getText()) {
      this.name.focus();
      return null;
    }
    if (!this.phone.getText()) {
      this.phone.focus();
      return null;
    }
    if (!this.username.getText()) {
      this.username.focus();
      return null;
    }
    if (!this.email.getText()) {
      this.email.focus();
      return null;
    }

    if (!this.password.getText()) {
      this.password.focus();
      return null;
    }
    const data = {
      username: this.username.getText(),
      email: this.email.getText(),
      password: this.password.getText(),
    };
    this.props.login(data);
  };

  onRegister = () => {
    if (!this.firstName.getText()) {
      this.firstName.focus();
      return null;
    }
    if (!this.lastName.getText()) {
      this.lastName.focus();
      return null;
    }
    if (!this.phone.getText()) {
      this.phone.focus();
      return null;
    }
    if (!this.email.getText()) {
      this.email.focus();
      return null;
    }
    if (!this.password.getText()) {
      this.password.focus();
      return null;
    }
    if (!this.confirmPassword.getText()) {
      this.confirmPassword.focus();
      return null;
    }
    const data = {
      FirstName: this.firstName.getText(),
      LastName: this.lastName.getText(),
      PhoneNumber: this.phone.getText(),
      Email: this.email.getText(),
      Password: this.password.getText(),
    };
    this.props.register(data);
    setTimeout(() => {
      if (this.props.gotoUserProfile === true) {
        Navigation.dismissModal(this.state.componentId);
      }
    }, 5000);
  };

  render() {
    console.log('gotoUserProfile', this.props.gotoUserProfile);
    return (
      <ScrollView style={{top: 5}}>
        <View style={{flex: 1, marginHorizontal: 15}}>
          <SpecialInput
            title="Họ*"
            ref={ref => {
              this.firstName = ref;
            }}
            isRequired
            validateType="empty"
            value="Nguyen"
            errorMessage={'Tên không hợp lệ'}
            placeholder={'Họ'}
            onSubmitEditing={() => {
              this.focusNextField('lastName');
            }}
          />
          <SpecialInput
            title="Tên*"
            ref={ref => {
              this.lastName = ref;
            }}
            isRequired
            validateType="empty"
            value="Tan"
            errorMessage={'Tên không hợp lệ'}
            placeholder={'Tên'}
            onSubmitEditing={() => {
              this.focusNextField('phone');
            }}
          />
          <SpecialInput
            title="Số điện thoại*"
            ref={ref => {
              this.phone = ref;
            }}
            isRequired
            validateType="phone"
            value="0975675720"
            errorMessage={'Số điện thoại không hợp lệ'}
            placeholder={'Số điện thoại'}
            onSubmitEditing={() => {
              this.focusNextField('email');
            }}
          />
          <SpecialInput
            title="Email*"
            ref={ref => {
              this.email = ref;
            }}
            isRequired
            validateType="email"
            value="tata46996@gmail.com"
            errorMessage={'Email không hợp lệ'}
            placeholder={'Email'}
            onSubmitEditing={() => {
              this.focusNextField('password');
            }}
          />

          <SpecialInput
            title="Mật khẩu*"
            ref={ref => {
              this.password = ref;
            }}
            value="123456789"
            secureTextEntry
            isRequired
            validateType="password"
            errorMessage={'Mật khẩu không hợp lệ'}
            placeholder={'Mật khẩu'}
            onSubmitEditing={() => {
              this.focusNextField('confirmPassword');
            }}
          />
          <SpecialInput
            title="Xác nhận mật khẩu*"
            ref={ref => {
              this.confirmPassword = ref;
            }}
            value="123456789"
            secureTextEntry
            isRequired
            validateType="password"
            errorMessage={'Mật khẩu không khớp'}
            placeholder={'Xác nhận mật khẩu'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableButton
            title={'Đăng ký'}
            style={styles.button}
            buttonColor={Colors.lightBlue}
            onPress={this.onRegister}
            textStyle={styles.textButton}
            loading={this.props.isLoading}
          />
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.registerReducer.registerLoading,
    gotoUserProfile: state.registerReducer.gotoUserProfile,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    register: data => dispatch(registerActions.register(data)),
  };
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  title: {fontSize: 30},
  button: {
    top: 10,
    width: 140,
    borderRadius: 5,
    height: 45,
  },
  textButton: {fontSize: 16, fontFamily: 'SVN-ProximaNova'},
});
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Register);
