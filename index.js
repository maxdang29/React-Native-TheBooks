/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

import App from './src/app';
import Intro from './src/screens/Intro/index';

import ColumnBookItem from './src/components/RowBookItem';
import {AsyncStorage} from 'react-native';
import startApp from './src/navigation/bottomTab';
import intro from './src/navigation/intro';

Navigation.registerComponent('app', () => App);
Navigation.registerComponent('Intro', () => Intro);

import {registerScreens} from './src/navigation/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    startApp();
  } else {
    intro();
  }
});
