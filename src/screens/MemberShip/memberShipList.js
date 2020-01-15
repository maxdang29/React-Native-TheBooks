import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import * as Action from '../../redux/memberShip/actions/actions';
import MemberPackage from '../../components/MemberPackage';

class Membership extends Component {
  async componentDidMount() {
    this.props.get_all_membership();
  }

  render() {
    const {data} = this.props;
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
    loading: state,
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
