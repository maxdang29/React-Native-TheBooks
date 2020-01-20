import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';

import {connect} from 'react-redux';
import _ from 'lodash';
import {Navigation} from 'react-native-navigation';

import {TouchableButton} from '../../components';
import Icons from 'react-native-vector-icons/thebook-appicon';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {Metrics} from '../../themes';
import AsyncStorage from '@react-native-community/async-storage';
import * as UpdateActions from '../../redux/auth/UserProfile/actions';
import {Colors} from '../../themes';

class EditUserProfile extends Component {
  static options(passProps) {
    return {
      topBar: {
        visible: true,
        drawBehind: false,
        animate: true,
        // title: {
        //   text: 'User Profile',
        // },
        rightButtons: [
          {
            id: 'editUserProfile',
            icon: require('../../assets/img/arr-up.png'),
            color: Colors.black,
          },
        ],
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {componentId: this.props.componentId};
    const {storeData} = this.props;
    this.state = {
      editable: false,
      firstName: storeData.FirstName,
      lastName: storeData.LastName,
      phone: storeData.PhoneNumber,
      email: storeData.Email,
      address: storeData.Address,
      gender: storeData.Gender,
      DateOfBirth: storeData.DateOfBirth,
      textStyle: 'styles.title',
    };
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    // Not mandatory
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'editUserProfile') {
      this.setState({
        editable: true,
        textStyle: 'styles.text',
      });
    }
    const {componentId} = this.props;
    if (buttonId === 'backEditUser') {
      Navigation.dismissModal(componentId);
    }
  }

  onUpdate = async () => {
    console.log('hooooooooo', this.props.storeData.Id);
    const data = {
      userId: this.props.storeData.Id,
      requestData: {
        FirstName: this.state.firstName,
        LastName: this.state.lastName,
        PhoneNumber: this.state.phone,
        Email: this.state.email,
        Address: this.state.address,
        Gender: 'Male',
        DateOfBirth: '01-01-1999',
        Position: 'string',
        TotalPoint: 0,
      },
      Token: AsyncStorage.getItem('token'),
    };
    this.props.update(data);

    this.setState({
      editable: false,
    });
    //this.props.fetchUserData(this.props.userData.id);
  };

  render() {
    var radio_props = [
      {label: 'Nam', value: 'Male'},
      {label: 'Nữ', value: 'Female'},
    ];
    return (
      <View>
        <ScrollView>
          <View style={styles.inputContainer}>
            <View style={styles.item}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>Họ</Text>
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  editable={this.state.editable}
                  value={this.state.lastName}
                  onChangeText={text => this.setState({lastName: text})}
                  style={[this.state.textStyle, styles.input]}
                />
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>Tên</Text>
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  editable={this.state.editable}
                  value={this.state.firstName}
                  onChangeText={text => this.setState({firstName: text})}
                  style={[this.state.textStyle, styles.input]}
                />
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>Số điện thoại</Text>
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  editable={this.state.editable}
                  value={this.state.phone}
                  onChangeText={text => this.setState({phone: text})}
                  style={[this.state.textStyle, styles.input]}
                />
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>Địa chỉ</Text>
              </View>
              <View style={[styles.textContainer]}>
                <TextInput
                  editable={this.state.editable}
                  value={this.state.address}
                  onChangeText={text => this.setState({address: text})}
                  style={[this.state.textStyle, styles.input]}
                />
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>Email</Text>
              </View>
              <View style={styles.textContainer}>
                <TextInput
                  editable={this.state.editable}
                  value={this.state.email}
                  onChangeText={text => this.setState({address: text})}
                  style={[this.state.textStyle, styles.input]}
                />
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>Giới tính</Text>
              </View>
              <View style={styles.textContainer}>
                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  formHorizontal={true}
                  buttonColor={Colors.lightBlue}
                  selectedButtonColor={Colors.lightBlue}
                  buttonSize={9}
                  labelStyle={{
                    fontSize: 16,
                    fontFamily: 'SVN-ProximaNova',
                    fontWeight: '100',
                    marginRight: 40,
                  }}
                  onPress={value => {
                    this.setState({gender: value});
                  }}
                />
              </View>
            </View>
          </View>

          {this.state.editable && (
            <TouchableButton
              title="Cập nhật"
              buttonColor={Colors.lightBlue}
              style={styles.updateButton}
              textStyle={styles.textButton}
              onPress={this.onUpdate}
              loading={this.props.isLoading}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userData: state.loginReducer.data,
  isLoading: state.updateUserProfileReducer.updateLoading,
});

const mapDispatchToProps = dispatch => ({
  update: data => dispatch(UpdateActions.updateUserProfile(data)),
  // fetchUserData: data => dispatch(UpdateActions.fetchUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile);

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    top: 5,
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height: Metrics.screenHeight / 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    marginHorizontal: 15,

    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#6e6e6e',
  },
  text: {
    fontSize: 15,
    color: '#3b3737',
  },
  email: {
    fontSize: 18,
    color: '#999999',
  },
  textContainer: {
    flex: 2,
  },
  input: {
    fontSize: 18,
  },
  updateButton: {
    width: '50%',
    marginTop: 40,
    borderRadius: 5,
    alignSelf: 'center',
  },
  address: {
    marginLeft: 20,
  },
  textButton: {fontSize: 16, fontFamily: 'SVN-ProximaNova'},
});
