import {Navigation} from 'react-native-navigation';

export const goDetail = (modal_name, value) => {
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
                  text: 'Detail',
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
