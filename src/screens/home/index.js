import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';

import SectionListBook from '../../components/sectionListBook';
import {pushScreen} from '../../navigation/pushScreen';
import FlatListCircle from '../../components/FlatListCircle';

import {connect} from 'react-redux';
import * as actionUser from '../../redux/home/actions/action';

class Home extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  componentDidMount() {
    this.props.getBestUsers();
    this.props.getBestReviews();
  }
  navigationButtonPressed({buttonId}) {
    if (buttonId === 'sideMenu') {
      try {
        Navigation.mergeOptions('sideBar', {
          sideMenu: {
            left: {
              visible: true,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    if (buttonId === 'searchButton') {
      pushScreen(this.props.componentId, 'search', null, null);
    }
  }

  render() {
    const {bestUser, bestReview} = this.props;
    return (
      <View>
        <ScrollView>
          <SectionListBook componentId={this.props.componentId} />
          <FlatListCircle
            passData={bestUser}
            title={'Top 10 bạn đọc mượn sách'}
            type={'bestUser'}
          />
          <FlatListCircle
            passData={bestReview}
            title={'Top 5 Nguời nhận xét nổi bật'}
            type={'reviews'}
          />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = store => {
  return {
    bestUser: store.homeReducer.bestUser,
    bestReview: store.homeReducer.bestReview,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBestUsers: () => {
      dispatch(actionUser.getBestUsers());
    },
    getBestReviews: () => {
      dispatch(actionUser.getBestReviews());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
