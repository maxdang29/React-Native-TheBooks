import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import * as Action from '../../redux/memberShip/actions/actions';
import MemberPackage from '../../components/MemberPackage';
import {Navigation} from 'react-native-navigation';

class Membership extends Component {
  async componentDidMount() {
    this.props.get_all_membership();
  }

  render() {
    const {data, loading} = this.props;
    if (loading)
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      );
    return (
      <View>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.Id}
            renderItem={({item}) => <MemberPackage item={item} />}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.membershipReducer.data,
    loading: state.membershipReducer.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_all_membership: () => {
      dispatch(Action.getAllMembershipCode());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Membership);
const styles = StyleSheet.create({
  loading: {
    color: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
