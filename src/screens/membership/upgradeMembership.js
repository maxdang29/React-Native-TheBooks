import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

export default class upgradeMembership extends Component {
  constructor(props) {
    super(props);
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        visible: false,
      },
    });
  }
  // componentDidMount() {
  //   const {value} = this.props;
  //   console.log('value', value.icon.color);
  //   mainColor = value.icon.color;
  // }

  render() {
    const {value} = this.props;
    console.log('value', value);
    // value.icon.color;
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            {color: `${value.icon.color ? value.icon.color : '#000'}`},
          ]}>
          {value.icon.name}
        </Text>
        <View
          style={[
            styles.containerCircle,
            {
              backgroundColor: `${
                value.icon.colorOpacity ? value.icon.colorOpacity : '#e2ddd3'
              }`,
            },
          ]}>
          <View
            style={[
              styles.containerCircleChild,
              {
                backgroundColor: `${
                  value.icon.color ? value.icon.color : '#000'
                }`,
              },
            ]}>
            <Icons name="ic-titan" solid size={80} style={[styles.icon]} />
          </View>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              styles.highlight,
              {color: `${value.icon.color ? value.icon.color : '#000'}`},
            ]}>
            {value.item.Membership.MaxBorrowDays} quyển
          </Text>
          <Text style={styles.text}> mượn mỗi lần</Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              styles.highlight,
              {color: `${value.icon.color ? value.icon.color : '#000'}`},
            ]}>
            {value.item.Membership.MaxExtensionTimes} lần
          </Text>
          <Text style={styles.text}> gia hạn</Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              styles.highlight,
              {color: `${value.icon.color ? value.icon.color : '#000'}`},
            ]}>
            {value.item.Membership.MaxRequestTimes} lần
          </Text>
          <Text style={styles.text}> yêu cầu danh sách</Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              styles.highlight,
              {color: `${value.icon.color ? value.icon.color : '#000'}`},
            ]}>
            {value.item.Membership.MaxDeliveryTimes} lần
          </Text>
          <Text style={styles.text}> giao sách tại nhà</Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              styles.highlight,
              styles.price,
              {color: `${value.icon.color ? value.icon.color : '#000'}`},
            ]}>
            {value.item.Membership.Value}
          </Text>
          <Text
            style={[
              styles.highlight,
              styles.year,
              {color: `${value.icon.color ? value.icon.color : '#000'}`},
            ]}>
            {' '}
            / năm
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: `${
                value.icon.color ? value.icon.color : '#000'
              }`,
            },
          ]}>
          <Text style={[styles.textButton]}>Nâng cấp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  containerCircleChild: {
    borderRadius: 150,
    padding: 20,
  },
  containerCircle: {
    borderRadius: 150,
    padding: 30,
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 30,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  highlight: {
    fontWeight: '700',
    fontSize: 20,
  },
  text: {
    textAlign: 'center',
    color: '#7f7f7f',
    fontSize: 20,
  },
  price: {
    fontSize: 35,
  },
  year: {
    bottom: -15,
    fontSize: 20,
  },
  button: {
    width: 180,
    padding: 15,
    marginTop: 20,
  },
  textButton: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
