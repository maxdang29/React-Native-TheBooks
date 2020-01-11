import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import store from '../redux/store';
import Register from '../screens/Authentication/Register';
import Home from '../screens/home/index';
import SideBar from '../navigation/sideBar';
import Login from '../screens/Authentication/Login';
import SeeMore from '../screens/home/seeMore';
import UserProfile from '../screens/UserProfile/UserProfile';

// import your components here
import {
  ConfirmAlert,
  InAppNotification,
  QRCodeOverlay,
} from '../components/Overlay';

import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

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
    () => gestureHandlerRootHOC(Home),
  );
  Navigation.registerComponent(
    'sideBar',
    () => ReduxProvider(SideBar),
    () => gestureHandlerRootHOC(SideBar),
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
}
