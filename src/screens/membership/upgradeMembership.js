import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class upgradeMembership extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Titan</Text>
        <View style={styles.containerCircle}>
          <View style={styles.containerCircleChild}>
            <Icons name="ic-titan" solid size={80} style={styles.icon} />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={[styles.highlight]}>10 ngày</Text>
          <Text style={styles.text}> mượn mỗi lần</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.highlight]}>02 lần</Text>
          <Text style={styles.text}> gia hạn</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.highlight]}>01 lần</Text>
          <Text style={styles.text}> yêu cầu danh sách</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.highlight]}>01 lần</Text>
          <Text style={styles.text}> giao sách tại nhà</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.highlight, styles.price]}>300.000</Text>
          <Text style={[styles.highlight, styles.year]}> / năm</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Nâng cấp</Text>
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
    backgroundColor: '#f4a621',
    borderRadius: 150,
    padding: 20,
  },
  containerCircle: {
    backgroundColor: 'rgb(252, 228, 188)',
    borderRadius: 150,
    padding: 30,
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 30,
    color: '#f4a621',
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  highlight: {
    color: '#f4a621',
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
    backgroundColor: '#f6b74c',
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
