/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

import App from './src/app';
import Intro from './src/screens/Intro/index';

Navigation.registerComponent('navigation.playground.WelcomeScreen', () => App);
Navigation.registerComponent('Intro', () => Intro);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Intro',
      },
    },
  });
});
