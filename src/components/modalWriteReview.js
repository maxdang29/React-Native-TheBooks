import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/thebook-appicon';
import * as commentAction from '../redux/comment/action/actions';
import {Colors, Metrics} from '../themes';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import TouchableButton from '../components/TouchableButton';

const arrayStar = [false, false, false, false, false];

class ModalWriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: arrayStar,
      valueText: '',
    };
  }
  onActionButtonPress = actionFunc => {
    this.dismiss();
    if (actionFunc) {
      actionFunc();
    }
  };

  dismiss = () => {
    Navigation.dismissOverlay(this.props.componentId);
  };

  checkedStar = index => {
    arrayStar.map((item, i) => {
      if (i <= index) {
        arrayStar[i] = true;
      } else {
        arrayStar[i] = false;
      }
    });

    this.setState({
      stars: arrayStar,
    });
  };

  onChangeText = text => {
    this.setState({
      valueText: text.text,
    });
  };
  postComment = async () => {
    const actions = this.props.actions;
    const {valueText, stars} = this.state;
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');
    const StarRating = stars.filter(item => item === true).length;

    const data = {
      BookId: actions[0].value,
      UserId: userId,
      Content: valueText,
      StarRating: StarRating,
      IsDeleted: false,
      IsOutstanding: false,
    };

    this.props.postComment(data, token);
    this.onActionButtonPress(actions[0].onPress);
  };
  render() {
    const {stars} = this.state;
    const actions = this.props.actions;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.popup}>
            <View style={styles.childContainer}>
              <Text style={styles.text}>Đánh giá</Text>
              <View style={styles.starContainer}>
                {stars.map((item, index) => {
                  return (
                    <TouchableOpacity onPress={() => this.checkedStar(index)}>
                      <Icons
                        key={index}
                        name="star"
                        size={40}
                        color="black"
                        style={[
                          styles.icon,
                          item ? styles.iconChecked : styles.iconUnChecked,
                        ]}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={styles.childContainer}>
              <Text style={styles.text}>Bình luận</Text>
              <View>
                <TextInput
                  multiline={true}
                  numberOfLines={8}
                  style={styles.textInput}
                  placeholder={
                    'Nhập nội dung nhận xét ở đây, tối thiểu 30 ký tự, tối đa 2000 ký tự'
                  }
                  onChangeText={text => this.onChangeText({text})}
                />
                <View style={styles.starContainer}>
                  <TouchableButton
                    title={'Đóng'}
                    style={styles.button}
                    isOutlineMode={true}
                    buttonColor={Colors.lightBlue}
                    onPress={() => this.onActionButtonPress(actions[0].onPress)}
                    textStyle={styles.textButton}
                    loading={this.props.isLoading}
                  />
                  <TouchableButton
                    title={'Gửi nhận xét'}
                    style={styles.button}
                    buttonColor={Colors.lightBlue}
                    onPress={() => this.postComment()}
                    textStyle={styles.textButton}
                    loading={this.props.isLoading}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

ModalWriteReview.propTypes = {
  componentId: PropTypes.string,
  title: PropTypes.string,
  actions: PropTypes.array,
};

ModalWriteReview.defaultProps = {
  actions: [],
};

const mapStateToProps = state => {
  return {
    isLoading: state.commentReducers.commentLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postComment: (data, token) => {
      dispatch(commentAction.postComment(data, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWriteReview);

const styles = StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.shadow,
  },
  popup: {
    width: Metrics.screenWidth - 35,
    height: Metrics.screenHeight - 350,
    backgroundColor: Colors.white,
    //paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  starContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  childContainer: {
    marginBottom: 40,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 150,
    left: 6,
    top: 6,
  },
  iconChecked: {
    color: '#fc9619',
  },
  iconUnChecked: {
    color: '#cecece',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova',
    color: '#393939',
    fontSize: 18,
    marginBottom: 15,
    marginTop: 20,
  },
  textInput: {
    borderColor: '#cecece',
    borderWidth: 0.5,
    marginLeft: 40,
    marginRight: 40,
    textAlignVertical: 'top',
  },
  button: {
    margin: 20,
    borderColor: '#41b8c1',
    borderWidth: 1,
    width: 140,
    borderRadius: 3,
  },
  buttonSendReview: {
    backgroundColor: '#41b8c1',
  },
  textButton: {fontSize: 16, fontFamily: 'SVN-ProximaNova'},
});
