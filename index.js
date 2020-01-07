/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

import App from './src/app';

import startApp from './src/navigation/bottomTab';

Navigation.registerComponent(`app`, () => App);

import {registerScreens} from './src/navigation/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'app',
//       },
//     },
//   });
//   // Navigation.setRoot({
//   //   root: {
//   //     sideMenu: {
//   //       id: "sideMenu",
//   //       left: {
//   //         component: {
//   //           id: "Drawer",
//   //           name: "app"
//   //         }
//   //       },
//   //       center: {
//   //         stack: {
//   //           id: "AppRoot",
//   //           children: [
//   //             {
//   //               component: {
//   //                 id: "App",
//   //                 name: "app"
//   //               }
//   //             }
//   //           ]
//   //         }
//   //       }
//   //     }
//   //   }
//   // });
// });
