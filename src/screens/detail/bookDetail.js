import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {offlineData} from '../../utils/offlineData';
import ColumnBookItem from '../../components/ColumnBookItem';
import CommentBook from '../../components/CommentBook';

export default class RowBookItem extends Component {
  render() {
    const data = offlineData.Data.NewBooks;

    return (
      <>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.shadowView}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&w=1000&q=80',
                }}
              />
            </View>
            <View style={styles.bookDescription}>
              <Text style={styles.bookTitle}>Để con được ốm thêm vài lần</Text>
              <Text style={styles.bookAuthor}>Nguyễn Trí Đoàn</Text>
              <View style={styles.viewFlexDirection}>
                <Icon style={styles.iconRankChecked} name="star" />
                <Icon style={styles.iconRankChecked} name="star" />
                <Icon style={styles.iconRankChecked} name="star" />
                <Icon style={styles.iconRankChecked} name="star" />
                <Icon style={styles.iconRankUnchecked} name="star" />
                <Icon style={styles.iconDirection} name="tag" />
                <Text style={[styles.bookWish]}>36.000</Text>
              </View>

              <View style={styles.viewFlexDirection}>
                <TouchableOpacity style={styles.btnBookType}>
                  <Text style={styles.textBookType}>Tình cảm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBookType}>
                  <Text style={styles.textBookType}>Đời sống</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBookType}>
                  <Text style={styles.textBookType}>Học đường</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.bookSubView}>
              <Text style={styles.bookSubText}>
                Don’t want to use the native fonts with React Native…well let’s
                add some custom fonts then! I’ll show you both approaches to
                installing custom fonts, one method uses react-native link,
                while the other method is linking manually, which I started with
                since I wanted to understand first-hand how the fonts were being
                set-up in Xcode.
              </Text>
            </View>
            <View style={styles.viewOfCategory}>
              <View style={styles.titleOfCategory}>
                <Text
                  style={[styles.textTitleOfCategory, styles.titleOfCategory]}>
                  Sách tương tự
                </Text>
                <Text style={styles.seeMore}>Xem thêm</Text>
              </View>
              <View style={[styles.bookFlatList]}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={data}
                  keyExtractor={(item, index) => `${index}`}
                  renderItem={({item}) => <ColumnBookItem item={item} />}
                />
              </View>
            </View>

            <View style={styles.viewOfCmt}>
              <View style={styles.titleOfCategory}>
                <Text
                  style={[styles.textTitleOfCategory, styles.titleOfCategory]}>
                  Nhận Xét
                </Text>
                {/* <Text style={styles.seeMore}>Xem thêm</Text> */}
              </View>
              <TouchableOpacity style={styles.btnCmt}>
                <Text style={styles.textCmt}>
                  Viết nhận xét cho cuốn sách này!
                </Text>
              </TouchableOpacity>

              <View style={[styles.bookFlatList]}>
                <CommentBook />
                <CommentBook />
              </View>
            </View>
            <Text style={[styles.showAllCmt]}>Xem tất cả nhận xét</Text>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity style={styles.footer}>
            <Text style={styles.footer_text}>Thêm Vào Giỏ</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textCmt: {
    color: '#1d9dd8',
  },
  showAllCmt: {
    marginTop: 45,
    textAlign: 'center',
    color: '#1d9dd8',
    fontSize: 17,
  },
  btnCmt: {
    borderColor: '#1d9dd8',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    height: 50,
    alignItems: 'center',
    paddingTop: 12,
  },
  footer: {
    backgroundColor: '#fc9619',
    height: 70,
    alignItems: 'center',
    paddingTop: 10,
    width: Dimensions.get('window').width,
  },
  footer_text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },

  viewOfCmt: {
    top: 40,
    flexDirection: 'column',
  },
  scrollView: {
    marginTop: 20,
  },
  viewOfCategory: {
    top: 70,
    flexDirection: 'column',
  },

  titleOfCategory: {
    flexDirection: 'row',
    flex: 1,
  },

  textTitleOfCategory: {
    fontSize: 20,
  },

  bookFlatList: {
    flex: 1,
  },

  container: {
    flexDirection: 'column',
    marginHorizontal: 20,
    bottom: 20,
  },
  image: {
    width: 230,
    height: 310,
    borderRadius: 5,
  },
  shadowView: {
    width: 231,
    height: 311,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 70,
    top: 30,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  bookDescription: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 35,
  },

  bookTitle: {
    color: '#4a4a4a',
    fontSize: 22,
  },

  viewFlexDirection: {
    flexDirection: 'row',
  },

  iconRankChecked: {
    color: '#fda942',
    marginRight: 4,
    top: -1,
    fontSize: 17,
  },
  iconRankUnchecked: {
    color: '#bcbcbc',
    marginRight: 20,
    top: -1,
    fontSize: 17,
  },
  bookAuthor: {
    color: '#bcbcbc',
    fontSize: 18,
    margin: 2,
    top: -5,
  },
  iconDirection: {
    color: '#fda942',
    borderColor: '#000',
    fontSize: 17,
    right: 3,
    top: -1,
  },
  bookWish: {
    color: '#bcbcbc',
    top: -5,
    left: 5,
    fontSize: 17,
  },

  btnBookType: {
    borderColor: '#cecece',
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },

  textBookType: {
    color: '#c5c5c5',
  },

  bookSubText: {
    color: '#9f9f9f',
  },
  bookSubView: {
    top: 50,
  },
});
