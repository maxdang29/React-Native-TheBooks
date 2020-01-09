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
import * as Action from '../../redux/home/actions/action';
import {countStars} from '../../utils/function';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      bookContent: '',
    };
  }

  componentDidMount() {
    const {Id, Content} = this.props.value;
    this.props.get_related_book(Id);
    this.props.get_review_book(Id);
    this.navigationEventListener = Navigation.events().bindComponent(this);
    this.limitContent(Content);
  }

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
        });
      }
    }
    // else {
    //   this.setState({
    //     bookContent: '',
    //   });
    // }
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

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'back') {
      Navigation.dismissModal(this.props.componentId);
    }
  }

  showExpanded = expanded => {
    if (expanded === true) {
      return (
        <Text style={styles.expanded} onPress={() => this.unexpanded()}>
          {' '}
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

  render() {
    const {value, idUser} = this.props;
    const {relatedBooks, reviewBooks} = this.props.data;
    const {bookContent, expanded} = this.state;
    // console.log('review ===>', reviewBooks);
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.shadowView}>
              <Image
                style={styles.image}
                source={{
                  uri: value.Medias[0].ImageUrl,
                }}
              />
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
                {value.Categories.map(item => {
                  return (
                    <TouchableOpacity style={styles.btnBookType}>
                      <Text style={styles.textBookType}>{item.Name}</Text>
                    </TouchableOpacity>
                  );
                })}
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
                  style={[styles.textTitleOfCategory, styles.titleOfCategory]}>
                  Sách tương tự
                </Text>
                <Text style={styles.seeMore}>Xem thêm</Text>
              </View>
              <View style={[styles.bookFlatList]}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={relatedBooks}
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
              </View>
              <TouchableOpacity style={styles.btnCmt}>
                <Text style={styles.textCmt}>
                  Viết nhận xét cho cuốn sách này!
                </Text>
              </TouchableOpacity>

              <View style={[styles.bookFlatList]}>
                {reviewBooks.map(item => {
                  if (idUser === item.UserId) {
                    return <CommentBook item={item} isUser={true} />;
                  } else {
                    return <CommentBook item={item} isUser={false} />;
                  }
                })}
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

const mapStateToProps = state => {
  return {
    data: state.homeReducer,
    idUser: state.loginReducer.data.Id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_related_book: id => {
      dispatch(Action.getRelatedBook(id));
    },
    get_review_book: id => {
      dispatch(Action.getReviewBook(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

const styles = StyleSheet.create({
  expanded: {
    color: '#1d9dd8',
  },
  textCmt: {
    color: '#1d9dd8',
  },
  showAllCmt: {
    marginTop: 25,
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
  scrollView: {
    marginTop: 20,
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
    marginHorizontal: 20,
    bottom: 10,
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
