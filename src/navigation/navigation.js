import {Navigation} from 'react-native-navigation';

export const goAnotherScreen = (modal_name, value, pageTitle) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: modal_name,
            passProps: {
              value,
            },
            options: {
              topBar: {
                title: {
                  text: pageTitle,
                },
                leftButtons: [
                  {
                    id: 'back',
                    icon: require('../assets/img/arrowBack.png'),
                  },
                ],
              },
            },
          },
        },
      ],
    },
  });
};
