import {Navigation} from 'react-native-navigation';
import {component} from '../navigation/layoutTypes';
import {Colors} from '../../src/themes';

export const showOverlay = (
  overlay,
  passProps,
  isTouchOutside = false,
  options,
) => {
  const defaultOptions = {
    overlay: {
      interceptTouchOutside: isTouchOutside,
    },
    layout: {
      backgroundColor: Colors.shadow,
      componentBackgroundColor: Colors.shadow,
    },
  };

  Navigation.showOverlay(
    component(overlay, passProps, {...defaultOptions, ...options}),
  );
};
