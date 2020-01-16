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
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Navigation} from 'react-native-navigation';

import ColumnBookItem from '../../components/ColumnBookItem';
import CommentBook from '../../components/CommentBook';
import * as bookAction from '../../redux/home/actions/action';
import * as cartAction from '../../redux/cart/actions/actions';
import * as commentAction from '../../redux/comment/action/actions';

import {countStars} from '../../utils/function';
import {goAnotherScreen} from '../../navigation/navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {showCommentForm} from '../../navigation/showCommentForm';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      bookContent: '',
      userId: '',
      token: '',
      numberReview: 1,
    };
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    const {componentId} = this.props;
    if (buttonId === 'back') {
      Navigation.dismissModal(componentId);
    }
  }

  getInforUser = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');
    await this.setState({
      userId: userId,
      token: token,
    });
  };

  componentDidMount() {
    if (this.props.value) {
      const {Id, Content} = this.props.value;
      this.props.get_related_book(Id);
      this.props.get_review_book(Id);
      this.limitContent(Content);
      this.getInforUser();
    }
  }
  componentDidUpdate() {
    const {commentLoading} = this.props;
    if (commentLoading) {
      const {Id} = this.props.value;
      this.props.get_review_book(Id);
    }
  }

  checkContent = content => {
    if (content.length > 300) {
      this.setState({
        expanded: false,
      });
    } else {
      this.setState({
        expanded: null,
      });
    }
  };

  limitContent = content => {
    const {expanded} = this.state;
    if (content != null) {
      if (content.length > 300) {
        if (expanded === true) {
          this.setState({
            bookContent: content,
          });
        } else if (expanded === false) {
          this.setState({
            bookContent: content.substring(0, 300) + '... ',
          });
        }
      } else {
        this.setState({
          bookContent: content,
          expanded: null,
        });
      }
    } else {
      this.setState({
        bookContent: content,
        expanded: null,
      });
    }
  };

  expanded = () => {
    this.setState(
      {
        expanded: true,
      },
      () => {
        const {Content} = this.props.value;
        this.limitContent(Content);
      },
    );
  };

  unexpanded = () => {
    this.setState(
      {
        expanded: false,
      },
      () => {
        const {Content} = this.props.value;
        this.limitContent(Content);
      },
    );
  };

  showExpanded = expanded => {
    if (expanded === true) {
      return (
        <Text style={styles.expanded} onPress={() => this.unexpanded()}>
          Thu lại
        </Text>
      );
    } else if (expanded === false) {
      return (
        <Text style={styles.expanded} onPress={() => this.expanded()}>
          Xem thêm
        </Text>
      );
    } else {
      return '';
    }
  };

  showModalReview = () => {
    const bookId = this.props.value.Id;
    showCommentForm('', '', [
      {
        text: 'Submit',
        value: bookId,
      },
    ]);
  };

  onAddToCart = async (bookID, quantity) => {
    const {userId, token} = this.state;

    const data = {
      BookId: bookID,
      Quantity: quantity,
      UserId: userId,
    };
    await this.props.add_to_cart(data, token);
  };
  setNumberReview = () => {
    const {reviewBooks} = this.props;
    const {numberReview} = this.state;
    const length = reviewBooks.length;

    const number = numberReview === 1 ? length : 1;

    this.setState({
      numberReview: number,
    });
  };

  render() {
    const {value} = this.props;
    const {userId, numberReview} = this.state;
    const {relatedBooks, reviewBooks} = this.props;
    const {bookContent, expanded} = this.state;

    if (value)
      return (
        <>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <View style={styles.shadowView}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: value.Medias[0]
                        ? value.Medias[0].ImageUrl
                        : 'https://member.thebooks.vn/static/media/Bia_sach.01b3a899.jpg',
                    }}
                  />
                </View>
              </View>

              <View style={styles.bookDescription}>
                <Text style={styles.bookTitle}>{value.Title}</Text>
                <Text style={styles.bookAuthor}>{value.Authors[0].Name}</Text>

                <View style={styles.viewFlexDirection}>
                  {countStars(
                    value.OverallStarRating,
                    styles.iconRankChecked,
                    styles.iconRankUnchecked,
                  )}
                  <Icon style={styles.iconDirection} name="tag" />
                  <Text style={[styles.bookWish]}>{value.FavoriteCount}</Text>
                </View>

                <View style={styles.viewFlexDirection}>
                  {value.Categories
                    ? value.Categories.map(item => {
                        return (
                          <TouchableOpacity style={styles.btnBookType}>
                            <Text style={styles.textBookType}>{item.Name}</Text>
                          </TouchableOpacity>
                        );
                      })
                    : null}
                </View>
              </View>

              <View style={styles.bookSubView}>
                <Text style={styles.bookSubText}>
                  {bookContent}
                  {this.showExpanded(expanded)}
                </Text>
              </View>

              <View style={styles.viewOfCategory}>
                <View style={styles.titleOfCategory}>
                  <Text
                    style={[
                      styles.textTitleOfCategory,
                      styles.titleOfCategory,
                    ]}>
                    Sách tương tự
                  </Text>
                  <Text style={styles.seeMore}>Xem thêm</Text>
                </View>
                <View style={[styles.bookFlatList]}>
                  {relatedBooks ? (
                    <FlatList
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      data={relatedBooks}
                      keyExtractor={(item, index) => item.Id + index}
                      renderItem={({item}) => (
                        <View style={styles.item}>
                          <ColumnBookItem item={item} />
                        </View>
                      )}
                    />
                  ) : null}
                </View>
              </View>
              <View style={styles.viewOfCmt}>
                <View style={styles.titleOfCategory}>
                  <Text
                    style={[
                      styles.textTitleOfCategory,
                      styles.titleOfCategory,
                    ]}>
                    Nhận Xét
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.btnCmt}
                  onPress={() => this.showModalReview()}>
                  <Text style={styles.textCmt}>
                    Viết nhận xét cho cuốn sách này!
                  </Text>
                </TouchableOpacity>

                <View style={[styles.bookFlatList]}>
                  {reviewBooks
                    ? reviewBooks.map((item, index) => {
                        if (index < numberReview) {
                          if (userId === item.UserId) {
                            return <CommentBook item={item} isUser={true} />;
                          } else {
                            return <CommentBook item={item} isUser={false} />;
                          }
                        }
                      })
                    : null}
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.setNumberReview()}>
              {numberReview === 1 ? (
                <Text style={[styles.showAllCmt]}>Xem tất cả nhận xét</Text>
              ) : (
                <Text style={[styles.showAllCmt]}>Thu gọn</Text>
              )}
            </TouchableOpacity>
          </ScrollView>
          <View>
            <TouchableOpacity
              style={styles.footer}
              onPress={() => this.onAddToCart(value.Id, 1)}>
              <Text style={styles.footer_text}>Thêm Vào Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    else return null;
  }
}

async function getStore() {
  const cartId = await AsyncStorage.getItem('cartId');
  return cartId;
}

const mapStateToProps = state => {
  return {
    relatedBooks: state.homeReducer.relatedBooks,
    reviewBooks: state.commentReducers.comment,
    idUser: state.loginReducer.data.Id,
    token: state.loginReducer.token,
    commentLoading: state.commentReducers.commentLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_related_book: id => {
      dispatch(bookAction.getRelatedBook(id));
    },
    get_review_book: id => {
      dispatch(commentAction.getReviewBook(id));
    },
    add_to_cart: (data, token) => {
      dispatch(cartAction.addToCart(data, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

const styles = StyleSheet.create({
  item: {
    marginRight: 20,
  },
  expanded: {
    color: '#1d9dd8',
  },
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
    top: 30,
    flexDirection: 'column',
  },

  viewOfCategory: {
    top: 45,
    flexDirection: 'column',
    marginVertical: 15,
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
    bottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
    textAlign: 'center',
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
    marginRight: 4,
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
    marginLeft: 20,
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
