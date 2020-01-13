import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icons from 'react-native-vector-icons/thebook-appicon';

const arrayStar = [false, false, false, false, false];

export default class ModalWriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: arrayStar,
      valueText: '',
    };
  }
  checkedStar = index => {
    arrayStar[index] = !arrayStar[index];
    this.setState({
      stars: arrayStar,
    });
  };

  onChangeText = text => {
    this.setState({
      valueText: text.text,
    });
  };
  render() {
    const {stars} = this.state;

    return (
      <View style={styles.container}>
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
              <TouchableOpacity style={[styles.starContainer, styles.button]}>
                <Text style={styles.text}>Đóng</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.starContainer,
                  styles.button,
                  styles.buttonSendReview,
                ]}>
                <Text style={styles.text}>Gửi nhận xét</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
});
