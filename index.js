/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import startApp from './src/navigation/bottomTab';
import {registerScreens} from './src/navigation/registerScreens';
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
