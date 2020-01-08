import {Navigation} from 'react-native-navigation';
// import {iconsMap} from '../../../utils/appIcons';
// import {Colors} from '../../../themes';

export const pushScreen = (componentId, screenApp, passProps, title) => {
  Navigation.push(componentId, {
    component: {
      name: screenApp,
      passProps: {
        data: passProps,
        title: title,
      },
      options: {
        topBar: {
          title: {
            text: title,
          },
        },
      },
    },
  });
};
