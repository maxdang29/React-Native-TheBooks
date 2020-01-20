import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';

import {countStars} from '../../src/utils/function';
import {connect} from 'react-redux';
import moment from 'moment';
import {showCommentForm} from '../navigation/showCommentForm';
import {showConfirmAlert} from '../navigation/showConfirmAlert';
import * as actionComment from '../redux/comment/action/actions';
import AsyncStorage from '@react-native-community/async-storage';

class CommentBook extends Component {
  constructor(props) {
    super(props);
  }

  onUpdate = () => {
    const {item} = this.props;
    showCommentForm('', '', [
      {
        text: 'Submit',
        value: {item, update: true},
      },
    ]);
  };
  onDeleteComment = async () => {
    const token = await AsyncStorage.getItem('token');
    const {item} = this.props;
    showConfirmAlert('Bạn có muốn xóa nhận xét này', '', [
      {
        text: 'Đóng',
      },
      {
        text: 'Xóa',
        onPress: () => {
          this.props.deleteReviewBook(item.Id, token);
        },
      },
    ]);
  };
  render() {
    const {item, isUser} = this.props;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.topBarCmt}>
            <Image
              style={styles.image}
              source={{
                uri: item.UrlImageUser
                  ? item.UrlImageUser
                  : 'https://the-books-dev-files.s3.amazonaws.com/Image/nguyen%20huong_1545511306138.png',
              }}
            />
            <View style={styles.alignCmt}>
              <Text style={styles.cmtAuthor}>{item.UserName}</Text>
              <View style={[styles.viewFlexDirection, styles.flex_st]}>
                {countStars(
                  item.StarRating,
                  styles.iconRankChecked,
                  styles.iconRankUnchecked,
                )}
              </View>
            </View>
          </View>

          {isUser ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onUpdate()}>
                <Icons style={styles.icon} name="ic-edit-comment" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onDeleteComment()}>
                <Icons style={styles.icon} name="ic-trash" />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text>
                {moment(item.UpdatedAt)
                  .subtract(10, 'days')
                  .calendar()}
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.cmtContent}>{item.Content}</Text>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReviewBook: (id, token) => {
      dispatch(actionComment.deleteReviewBook(id, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBook);

const styles = StyleSheet.create({
  cmtContent: {
    fontSize: 16,
    color: '#4a4a4a',
    top: 5,
    marginLeft: 10,
  },
  btn: {
    margin: 8,
  },
  flex_st: {
    paddingLeft: 15,
  },

  icon: {
    fontSize: 18,
    color: '#4a4a4a',
  },

  topBarCmt: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  container: {
    flexDirection: 'column',
    marginVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },

  viewFlexDirection: {
    flexDirection: 'row',
  },
  image: {
    width: 47,
    height: 47,
    borderRadius: 50,
  },
  cmtAuthor: {
    color: '#4a4a4a',
    fontSize: 17,
    paddingHorizontal: 15,
    top: -2,
  },
  alignCmt: {
    textAlign: 'center',
    flex: 1,
  },

  iconRankChecked: {
    color: '#fda942',
    marginRight: 3,
    top: 1,
  },
  iconRankUnchecked: {
    color: '#bcbcbc',
    marginRight: 3,
    top: 1,
  },
  cmtLike: {
    color: '#bcbcbc',
    left: 10,
    top: -5,
  },
});
