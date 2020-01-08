import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class CommentBook extends Component {
  render() {
    // const {item} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topBarCmt}>
          <Image
            style={styles.image}
            source={{
              //   uri: item.Medias[0].ImageUrl,
              uri:
                'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&w=1000&q=80',
            }}
          />
          <View style={styles.alignCmt}>
            <Text style={styles.cmtAuthor}>Author name</Text>
            <View style={styles.viewFlexDirection}>
              <Icon
                style={[styles.iconRankChecked, styles.flex_st]}
                name="star"
              />
              <Icon style={styles.iconRankChecked} name="star" />
              <Icon style={styles.iconRankChecked} name="star" />
              <Icon style={styles.iconRankChecked} name="star" />
              <Icon style={styles.iconRankUnchecked} name="star" />
              <Text style={styles.cmtLike}> 342</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btn_update}>
            <Icon style={styles.icon_update} name="edit" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_delete}>
            <Icon style={styles.icon_delete} name="trash-o" />
          </TouchableOpacity>
        </View>
        <Text style={styles.cmtContent}>
          Don’t want to use the native fonts with React Native…well let’s add
          some custom fonts then! I’ll show you both approaches to
        </Text>
      </View>
    );
  }
}

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
