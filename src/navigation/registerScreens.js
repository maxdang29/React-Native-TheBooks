import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import store from '../redux/store';

import Home from '../screens/home/index';
import SideBar from '../navigation/sideBar';
import SeeMore from '../screens/home/seeMore';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
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
    'seeMore',
    () => ReduxProvider(SeeMore),
    () => SeeMore,
  );
}
