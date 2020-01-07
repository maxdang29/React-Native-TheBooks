/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

import App from './src/app';

import ColumnBookItem from './src/components/RowBookItem';

import startApp from './src/navigation/bottomTab';

Navigation.registerComponent('app', () => App);

import {registerScreens} from './src/navigation/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
