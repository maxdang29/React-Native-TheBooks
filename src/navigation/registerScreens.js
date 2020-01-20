import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import store from '../redux/store';

import Home from '../screens/home/index';
import SideBar from '../navigation/sideBar';
import BookDetail from '../screens/detail/bookDetail';
import Register from '../screens/Authentication/Register';
import Login from '../screens/Authentication/Login';
import SeeMore from '../screens/home/seeMore';
import UserProfile from '../screens/UserProfile/UserProfile';
import ListUserBook from '../screens/UserBook/ListUserBook';
import ModalWriteReview from '../components/modalWriteReview';
import ListOrder from '../screens/order/listOrder';
import UserSetting from '../screens/UserProfile/UserSetting';

// import your components here
import {
  ConfirmAlert,
  InAppNotification,
  QRCodeOverlay,
} from '../components/Overlay';
import EmptyView from '../components/EmptyView';
//components

import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Search from '../screens/search/search';
import SearchResult from '../screens/search/searchResult';
import Sort from '../screens/search/sort';
import SearchResultFilter from '../screens/search/searchResultWithFilter';
import CircleUserItem from '../components/CircleUserItem';
import Cart from '../screens/Cart/cart';
import SplashScreen from '../screens/splashScreen';
import UpgradeMembership from '../screens/membership/upgradeMembership';
import Membership from '../screens/membership/memberShipList';
import UpgradeSuccess from '../screens/membership/upgradeSuccess';
import Payment from '../screens/payment/payment';
import Notification from '../screens/notification/notification';
console.disableYellowBox = true;

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
  Navigation.registerComponent(
    'UpgradeMembership',
    () => ReduxProvider(UpgradeMembership),
    () => UpgradeMembership,
  );
  Navigation.registerComponent(
    'Notification',
    () => ReduxProvider(Notification),
    () => Notification,
  );
  Navigation.registerComponent(
    'Membership',
    () => ReduxProvider(Membership),
    () => Membership,
  );

  Navigation.registerComponent(
    'Cart',
    () => ReduxProvider(Cart),
    () => Cart,
  );

  Navigation.registerComponent(
    'CircleUserItem',
    () => ReduxProvider(CircleUserItem),
    () => CircleUserItem,
  );
  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => gestureHandlerRootHOC(Home),
  );
  Navigation.registerComponent(
    'sideBar',
    () => ReduxProvider(SideBar),
    () => gestureHandlerRootHOC(SideBar),
  );
  Navigation.registerComponent(
    'BookDetail',
    () => ReduxProvider(BookDetail),
    () => BookDetail,
  );
  Navigation.registerComponent(
    'Register',
    () => ReduxProvider(Register),
    () => gestureHandlerRootHOC(Register),
  );
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => gestureHandlerRootHOC(Login),
  );
  Navigation.registerComponent(
    'seeMore',
    () => ReduxProvider(SeeMore),
    () => gestureHandlerRootHOC(SeeMore),
  );
  Navigation.registerComponent(
    'UserProfile',
    () => ReduxProvider(UserProfile),
    () => gestureHandlerRootHOC(UserProfile),
  );
  Navigation.registerComponent(
    'QRCodeOverlay',
    () => ReduxProvider(QRCodeOverlay),
    () => gestureHandlerRootHOC(QRCodeOverlay),
  );
  Navigation.registerComponent(
    'ConfirmAlert',
    () => ReduxProvider(ConfirmAlert),
    () => gestureHandlerRootHOC(ConfirmAlert),
  );
  Navigation.registerComponent(
    'InAppNotification',
    () => ReduxProvider(InAppNotification),
    () => gestureHandlerRootHOC(InAppNotification),
  );
  Navigation.registerComponent(
    'search',
    () => ReduxProvider(Search),
    () => Search,
  );
  Navigation.registerComponent(
    'searchResult',
    () => ReduxProvider(SearchResult),
    () => SearchResult,
  );

  Navigation.registerComponent(
    'searchResultFilter',
    () => ReduxProvider(SearchResultFilter),
    () => SearchResultFilter,
  );
  Navigation.registerComponent(
    'sort',
    () => ReduxProvider(Sort),
    () => Sort,
  );
  Navigation.registerComponent(
    'ListUserBook',
    () => ReduxProvider(ListUserBook),
    () => ListUserBook,
  );
  Navigation.registerComponent(
    'EmptyView',
    () => ReduxProvider(EmptyView),
    () => EmptyView,
  );
  Navigation.registerComponent(
    'modalWriteReview',
    () => ReduxProvider(ModalWriteReview),
    () => ModalWriteReview,
  );
  Navigation.registerComponent(
    'UserSetting',
    () => ReduxProvider(UserSetting),
    () => UserSetting,
  );

  Navigation.registerComponent(
    'splashScreen',
    () => ReduxProvider(SplashScreen),
    () => SplashScreen,
  );

  Navigation.registerComponent(
    'listOrder',
    () => ReduxProvider(ListOrder),
    () => ListOrder,
  );

  Navigation.registerComponent(
    'payment',
    () => ReduxProvider(Payment),
    () => Payment,
  );
  Navigation.registerComponent(
    'upgradeSuccess',
    () => ReduxProvider(UpgradeSuccess),
    () => UpgradeSuccess,
  );
}
