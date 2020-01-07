/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

import ColumnBookItem from './src/components/RowBookItem';

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
