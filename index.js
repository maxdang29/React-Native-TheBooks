/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

import ColumnBookItem from './src/screens/detail/bookDetail';
// import ColumnBookItem from './src/components/ColumnBookItem';

Navigation.registerComponent('ColumnBookItem', () => ColumnBookItem);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'ColumnBookItem',
      },
    },
  });
});
