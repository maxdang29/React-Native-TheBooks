import {Navigation} from 'react-native-navigation';
export default function intro() {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Intro',
      },
    },
  });
}
