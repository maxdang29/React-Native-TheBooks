import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as Action from '../../redux/notification/action/actions';
import {Colors} from '../../themes';
import Icons from 'react-native-vector-icons/thebook-appicon';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

class Notification extends Component {
  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    this.props.get_user_notifications(token);
  }

  markAsSeen = async id => {
    const token = await AsyncStorage.getItem('token');
    const data = {
      Ids: [id],
      IsSeenAll: false,
    };
    this.props.mark_as_seen_notification(data, token);
  };

  render() {
    const {data} = this.props;
    return (
      <View>
        <View>
          {data ? (
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.Id}
              renderItem={({item}) => (
                <>
                  <View style={styles.shadowView}>
                    <TouchableOpacity onPress={() => this.markAsSeen(item.Id)}>
                      <View style={styles.container}>
                        <View
                          style={[
                            styles.iconView,
                            {
                              backgroundColor: `${
                                item.IsSeen
                                  ? '#a2a5a4'
                                  : item.Notification.Type === 'BookRequest'
                                  ? '#eb6f6f'
                                  : item.Notification.Type === 'Promotion'
                                  ? '#7ed321'
                                  : item.Notification.Type === 'Notification'
                                  ? '#7e3dff'
                                  : '#a2a5a4'
                              }`,
                            },
                          ]}>
                          <Icons
                            name={`${
                              item.Notification.Type === 'BookRequest'
                                ? 'ic-book'
                                : item.Notification.Type === 'Promotion'
                                ? 'ic-sale'
                                : item.Notification.Type === 'Notification'
                                ? 'ic-notification-1'
                                : 'ic-book'
                            }`}
                            solid
                            size={35}
                            style={[styles.icon]}
                          />
                        </View>
                        <View style={styles.column_2}>
                          <View style={styles.titleView}>
                            <Text
                              style={[
                                styles.titleText,
                                {
                                  color: `${item.IsSeen ? '#a2a5a4' : '#000'}`,
                                },
                              ]}>
                              {item.Notification.Title}
                            </Text>
                            <Text style={styles.titleDate}>
                              {moment(item.Notification.CreatedAt)
                                .subtract(10, 'days')
                                .calendar()}
                            </Text>
                          </View>
                          <View style={styles.contentView}>
                            <Text style={styles.content}>
                              {item.Notification.Body}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            />
          ) : (
            <Text> Không có thông báo nào.</Text>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.noticeReducer.notice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_user_notifications: token => {
      dispatch(Action.getListUserNotification(token));
    },
    mark_as_seen_notification: (data, token) => {
      dispatch(Action.markAsSeenNotification(data, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

const styles = StyleSheet.create({
  shadowView: {
    borderRadius: 6,
    marginVertical: 16,
    marginHorizontal: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  content: {
    color: Colors.darkGray,
  },
  contentView: {
    width: 300,
  },
  icon: {
    color: '#fff',
  },
  column_2: {flexDirection: 'column', marginVertical: 2},
  iconView: {
    marginHorizontal: 6,
    marginVertical: 6,
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: 50,
    height: 50,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 6,
    marginHorizontal: 6,
    paddingVertical: 4,
  },
  titleView: {
    flexDirection: 'row',
  },
  titleText: {
    flex: 1,
    fontSize: 16,
  },
  titleDate: {
    paddingLeft: 25,
    marginVertical: 4,
    flex: 1,
    color: Colors.darkGray,
  },
});
