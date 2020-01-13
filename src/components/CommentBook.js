import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {countStars} from '../../src/utils/function';
import {connect} from 'react-redux';
import moment from 'moment';

class CommentBook extends Component {
  render() {
    const {item, isUser} = this.props;
    return (
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
          {isUser ? (
            <View>
              <TouchableOpacity style={styles.btn_update}>
                <Icon style={styles.icon_update} name="edit" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_delete}>
                <Icon style={styles.icon_delete} name="trash-o" />
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
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   console.log();
//   return {
//     data: state.homeReducer,
//     idUser: state.loginReducer.data.Id,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//   };
// };

export default connect(null, null)(CommentBook);

const styles = StyleSheet.create({
  cmtContent: {
    fontSize: 16,
    color: '#4a4a4a',
    top: 5,
  },
  btn_update: {
    right: 17,
  },
  flex_st: {
    paddingLeft: 15,
  },
  btn_delete: {
    right: 5,
    top: -2,
  },
  icon_update: {
    fontSize: 25,
    color: '#4a4a4a',
  },
  icon_delete: {
    fontSize: 25,
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
    // fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    fontSize: 17,
    width: 230,
    paddingHorizontal: 15,
    top: -2,
  },
  alignCmt: {
    width: 160,
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
