import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/thebook-appicon';
import Colors from '../themes/Colors';
import AsyncStorage from '@react-native-community/async-storage';

export const openDrawer = () => {
  Navigation.mergeOptions('sideDrawer', {
    sideMenu: {
      left: {
        enabled: true,
        visible: true,
      },
    },
  });
};

export default async function startApp() {
  const UserData = await AsyncStorage.getItem('userData');
  const token = await AsyncStorage.getItem('token');
  Promise.all([
    Icons.getImageSource('ic-home', 30),
    Icons.getImageSource('ic-order', 30),
    Icons.getImageSource('ic-notification-1', 30),
    Icons.getImageSource('ic-user', 30),
    Icons.getImageSource('ic-library', 30),
    Icons.getImageSource('ic-menu', 25),
    Icons.getImageSource('ic-search', 25),
  ]).then(
    ([listBook, orderHistory, notifications, user, library, menu, search]) => {
      Navigation.setRoot({
        root: {
          sideMenu: {
            left: {
              component: {
                name: 'sideBar',
                id: 'sideBar',
              },
            },
            center: {
              bottomTabs: {
                id: 'tabs',
                options: {
                  bottomTabs: {
                    animate: false,
                  },
                },
                children: [
                  {
                    stack: {
                      id: 'tab1',
                      children: [
                        {
                          component: {
                            name: 'Home',
                            options: {
                              topBar: {
                                leftButtons: [
                                  {
                                    id: 'sideMenu',
                                    icon: menu,
                                    fontSize: 10,
                                  },
                                ],
                                rightButtons: [
                                  {
                                    id: 'searchButton',
                                    icon: search,
                                    fontSize: 10,
                                  },
                                ],
                                visible: false,
                              },
                              bottomTab: {
                                fontSize: 10,
                                icon: listBook,
                                selectedIconColor: Colors.primary,
                                animate: false,
                              },
                            },
                          },
                        },
                      ],
                    },
                  },

                  {
                    stack: {
                      id: 'tab2',
                      children: [
                        {
                          component: {
                            name: 'listOrder',
                            options: {
                              topBar: {
                                title: {
                                  text: 'Danh sách đơn hàng',
                                },
                                visible: true,
                              },
                              bottomTab: {
                                fontSize: 10,
                                icon: orderHistory,
                                selectedIconColor: Colors.primary,
                                visible: true,
                                animate: false,
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    stack: {
                      id: 'tab2',
                      children: [
                        {
                          component: {
                            name: 'UserProfile',
                            passProps: {
                              token,
                              UserData,
                            },
                            options: {
                              topBar: {
                                visible: false,
                              },
                              bottomTab: {
                                fontSize: 10,
                                selectedIconColor: Colors.primary,
                                icon: user,
                                animate: false,
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    stack: {
                      id: 'tab2',
                      children: [
                        {
                          component: {
                            name: 'Login',
                            options: {
                              topBar: {
                                visible: false,
                              },
                              bottomTab: {
                                fontSize: 10,
                                icon: notifications,
                                selectedIconColor: Colors.primary,
                                animate: false,
                              },
                            },
                          },
                        },
                      ],
                    },
                  },

                  {
                    stack: {
                      id: 'tab2',
                      children: [
                        {
                          component: {
                            name: 'UserSetting',
                            options: {
                              topBar: {
                                leftButtons: [
                                  {
                                    id: 'sideMenu',
                                    icon: menu,
                                  },
                                ],
                                visible: true,
                              },
                              bottomTab: {
                                fontSize: 10,
                                selectedIconColor: Colors.primary,
                                icon: library,
                                animate: false,
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      });
    },
  );
}
