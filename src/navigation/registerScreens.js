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
import Search from '../screens/search/search';
import SearchResult from '../screens/search/searchResult';
import RowBookItem from '../components/RowBookItem';
import CircleUserItem from '../components/CircleUserItem';
import Cart from '../screens/Cart/cart';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
  Navigation.registerComponent(
    'Cart',
    () => ReduxProvider(Cart),
    () => Cart,
  );
  Navigation.registerComponent(
    'RowBookItem',
    () => ReduxProvider(RowBookItem),
    () => RowBookItem,
  );
  Navigation.registerComponent(
    'CircleUserItem',
    () => ReduxProvider(CircleUserItem),
    () => CircleUserItem,
  );
  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'sideBar',
    () => ReduxProvider(SideBar),
    () => SideBar,
  );
  Navigation.registerComponent(
    'BookDetail',
    () => ReduxProvider(BookDetail),
    () => BookDetail,
  );
  Navigation.registerComponent(
    'Register',
    () => ReduxProvider(Register),
    () => Register,
  );
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'seeMore',
    () => ReduxProvider(SeeMore),
    () => SeeMore,
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
}
