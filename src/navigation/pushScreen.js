import {Navigation} from 'react-native-navigation';

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
