import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/thebook-appicon';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transfer: true,
      payHome: false,
      payStore: false,
    };
  }

  changePayment = (pay1, pay2, pay3) => {
    this.setState({
      [pay1]: true,
      [pay2]: false,
      [pay3]: false,
    });
  };
  loadPayment = (transfer, payHome, payStore) => {
    if (transfer) {
      return (
        <View>
          <Text style={[styles.text, {marginBottom: 30}]}>
            Quý khách vui lòng chuyển khoản vào một trong các tài khoản ngân
            hàng dưới đây.
          </Text>
          <View style={[styles.row, {marginTop: 5, marginBottom: 5}]}>
            <Icons style={styles.iconBank} size={40} name="ic-cua-hang" />
            <View>
              <Text style={styles.idBank}>34902KL5525263</Text>
              <Text style={styles.nameBank}>
                Ngân hàng TMCP ngoại thương Việt Nam
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icons style={styles.iconBank} size={40} name="ic-web" />
            <View>
              <Text style={styles.idBank}>34902KL5525263</Text>
              <Text style={styles.nameBank}>
                Ngân hàng TMCP ngoại thương Việt Nam
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icons style={styles.iconBank} size={40} name="ic-platinum" />
            <View>
              <Text style={styles.idBank}>34902KL5525263</Text>
              <Text style={styles.nameBank}>
                Ngân hàng TMCP ngoại thương Việt Nam
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>3. Xác nhận giao dịch</Text>
            <Text>Mã số giao dịch</Text>
            <TextInput style={styles.input} placeholder={'Nhập mã tại đây'} />
            <Text>
              Lưu ý: sau khi xác nhận mã giao dịch chuyển khoản ngân hàng thành
              công, chúng tôi sẽ chuyển mã nâng cấp thành viên vào email bạn đã
              đăng ký.
            </Text>
          </View>
        </View>
      );
    } else if (payHome) {
      return (
        <View>
          <Text>Thanh toán tại nhà</Text>
        </View>
      );
    } else if (payStore) {
      return (
        <View>
          <Text>Thanh toán tại cữa hàng</Text>
        </View>
      );
    }
  };
  render() {
    const {value} = this.props;
    const {transfer, payHome, payStore} = this.state;
    const item = value.item;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>1. Thông tin gói thành viên</Text>
            <Text style={styles.textHightLight}>
              Thành viên {item.Membership.Name}
            </Text>
            <View style={[styles.row]}>
              <View style={styles.row}>
                <Text style={styles.text}>Giá trị: </Text>
                <Text style={styles.textHightLight}>
                  {item.Membership.Value}
                </Text>
              </View>
              <View style={[styles.row]}>
                <Text style={styles.text}>Số lượng:</Text>
                <TouchableOpacity>
                  <Text style={[styles.text, styles.buttonCalculate]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.text, {color: '#1b969f'}]}>1</Text>
                <TouchableOpacity>
                  <Text style={[styles.text, styles.buttonCalculate]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Thời hạn: </Text>
              <Text style={styles.textHightLight}>
                {item.Membership.MaxExtensionTimes}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Số ngày mượn mỗi lượt: </Text>
              <Text style={styles.textHightLight}>
                {item.Membership.MaxBorrowDays} ngày
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Số lần gia hạn sách mỗi năm: </Text>
              <Text style={styles.textHightLight}>
                {item.Membership.MaxDeliveryTimes} lần
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Số lần giao sách tại nhà mỗi năm:</Text>
              <Text style={styles.textHightLight}>
                {item.Membership.MembershipExpire} lần
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>2. Phương thức thanh toán</Text>
            <View style={[styles.row]}>
              <TouchableOpacity
                style={styles.buttonPayment}
                onPress={() =>
                  this.changePayment('transfer', 'payHome', 'payStore')
                }>
                <Icons
                  style={styles.iconPayment}
                  size={45}
                  name="ic-chuyen-khoan"
                />
                <Text style={styles.textPayment}>Chuyển khoản</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonPayment}
                onPress={() =>
                  this.changePayment('payHome', 'transfer', 'payStore')
                }>
                <Icons
                  style={styles.iconPayment}
                  size={45}
                  name="ic-giao-tai-nha"
                />
                <Text style={styles.textPayment}>Giao tại nhà</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonPayment}
                onPress={() =>
                  this.changePayment('payStore', 'transfer', 'transfer')
                }>
                <Icons
                  style={styles.iconPayment}
                  size={45}
                  name="ic-cua-hang"
                />
                <Text style={styles.textPayment}>Mua tại cửa hàng</Text>
              </TouchableOpacity>
            </View>
            {this.loadPayment(transfer, payHome, payStore)}
          </View>
        </View>

        <TouchableOpacity style={styles.buttonConfirm}>
          <Text style={styles.textButtonConfirm}>Xác nhận mua mã</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  title: {
    color: '#4a4a4a',
    fontSize: 22,
    marginVertical: 18,
  },
  textHightLight: {
    fontSize: 18,
    color: '#1b969f',
    marginRight: 40,
  },
  text: {
    fontSize: 18,
    color: '#4a4a4a',
  },
  buttonCalculate: {
    marginHorizontal: 20,
  },
  buttonPayment: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
  },
  iconPayment: {
    textAlign: 'center',
  },
  textPayment: {
    fontSize: 14,
    color: '#4a4a4a',
    textAlign: 'center',
  },
  iconBank: {
    marginRight: 20,
    color: '#1b969f',
  },
  nameBank: {
    fontSize: 16,
  },
  idBank: {
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    height: 60,
    borderColor: '#1b969f',
    borderWidth: 0.5,
    marginVertical: 20,
    marginRight: 20,
    padding: 10,
  },
  buttonConfirm: {
    backgroundColor: '#1b969f',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textButtonConfirm: {
    color: 'white',
    fontSize: 20,
  },
});
