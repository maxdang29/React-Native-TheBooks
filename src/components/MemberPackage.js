import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';

import {connect} from 'react-redux';
import {Colors} from '../themes';
const iconWithData = [
  {icon: 'ic-platinum', name: 'Platinum', color: '#ea5d5d'},
  {icon: 'ic-basic', name: 'Basic', color: '#8cd542'},
  {icon: 'ic-titan', name: 'Titan', color: '#f4a621'},
  {icon: 'ic-silver', name: 'Silver', color: '#23c6d2'},
];

class MemberPackage extends Component {
  findIcon = name => {
    return iconWithData.filter(item => {
      return item.name === name;
    });
  };

  render() {
    const {item} = this.props;
    const icon = this.findIcon(item.Membership.Name)[0];
    return (
      <>
        <View style={styles.shadowView}>
          <TouchableOpacity style={styles.around}>
            <View style={styles.container}>
              <View style={[styles.ViewFlex_1, styles.image]}>
                <Icons
                  style={[styles.packageIcon]}
                  color={icon.color}
                  name={icon.icon}
                />
              </View>
              <View style={[styles.ViewFlex_2, styles.midColumn]}>
                <Text style={[styles.titlePackage]}>
                  {item.Membership.Name}{' '}
                </Text>
                <Text style={styles.extension}>
                  Lan gia han {item.Membership.MaxExtensionTimes}
                </Text>
                <Text style={styles.borrow}>
                  Lượt mượn {item.Membership.MaxBorrowDays}
                </Text>
              </View>
              <View style={[styles.ViewFlex_2, styles.rightColumn]}>
                <View style={styles.flexRight}>
                  <Text style={styles.price}>{item.Membership.Value}</Text>
                </View>
                <View style={styles.flexRight}>
                  <Text style={styles.borrow}>
                    Yêu cầu sách {item.Membership.MaxRequestTimes}
                  </Text>
                </View>
                <View style={styles.flexRight}>
                  <Text style={styles.borrow}>
                    Giao sách: {item.Membership.MaxDeliveryTimes}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default connect(null, null)(MemberPackage);

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    paddingTop: 10,
  },
  shadowView: {
    height: 100,
    borderRadius: 5,
    top: 4,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginVertical: 6,
    paddingTop: 10,
    marginHorizontal: 8,
  },
  around: {
    height: 100,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    borderRadius: 5,
  },
  midColumn: {
    height: 60,
    borderLeftColor: Colors.darkGray,
    borderLeftWidth: 0.5,
    paddingLeft: 10,
    marginTop: 6,
  },
  rightColumn: {
    paddingRight: 10,
    paddingVertical: 4,
  },
  flexRight: {
    flexDirection: 'row-reverse',
  },
  price: {
    fontSize: 16,
    color: Colors.lightBlue,
    marginVertical: 1,
    textAlign: 'center',
  },
  titlePackage: {
    fontSize: 16,
    color: Colors.lightBlue,
    marginVertical: 1,
  },
  extension: {
    fontSize: 12,
    color: Colors.darkGray,
    marginVertical: 1,
  },
  borrow: {
    fontSize: 12,
    color: Colors.darkGray,
    marginVertical: 1,
  },
  ViewFlex_1: {
    flex: 1,
  },
  ViewFlex_2: {
    flex: 2,
  },
  packageIcon: {
    fontSize: 30,
  },
});
