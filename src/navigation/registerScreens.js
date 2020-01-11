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
import Sort from '../screens/search/sort';

import SearchResultFilter from '../screens//search/searchResultWithFilter';
import CircleUserItem from '../components/CircleUserItem';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
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
}
