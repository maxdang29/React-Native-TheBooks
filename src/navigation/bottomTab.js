import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../themes/Colors';

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

export default function startApp() {
  Promise.all([
    Ionicons.getImageSource('ios-bookmarks', 30),
    Ionicons.getImageSource('ios-clipboard', 30),
    Ionicons.getImageSource('ios-notifications', 30),
    Ionicons.getImageSource('ios-contact', 30),
    Ionicons.getImageSource('ios-journal', 30),
    Ionicons.getImageSource('ios-menu', 30),
  ]).then(([listBook, orderHistory, notifications, user, library, menu]) => {
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
                                  id: 'backPress',
                                  text: 'Back',
                                  icon: menu,
                                  fontSize: 10,
                                },
                              ],
                              visible: true,
                            },
                            bottomTab: {
                              fontSize: 10,
                              icon: listBook,
                              selectedIconColor: Colors.primary,
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
                          name: 'Home',
                          options: {
                            topBar: {
                              leftButtons: [
                                {
                                  id: 'backPress',
                                  text: 'Back',
                                  icon: menu,
                                  fontSize: 10,
                                },
                              ],
                              visible: true,
                            },
                            bottomTab: {
                              fontSize: 10,
                              icon: orderHistory,
                              selectedIconColor: Colors.primary,
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
                          name: 'Home',
                          options: {
                            topBar: {
                              leftButtons: [
                                {
                                  id: 'backPress',
                                  text: 'Back',
                                  icon: menu,
                                },
                              ],
                              visible: true,
                            },
                            bottomTab: {
                              fontSize: 10,
                              selectedIconColor: Colors.primary,
                              icon: user,
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
                          name: 'Home',
                          options: {
                            topBar: {
                              leftButtons: [
                                {
                                  id: 'backPress',
                                  text: 'Back',
                                  icon: menu,
                                },
                              ],
                              visible: true,
                            },
                            bottomTab: {
                              fontSize: 10,
                              icon: notifications,
                              selectedIconColor: Colors.primary,
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
                          name: 'Home',
                          options: {
                            topBar: {
                              leftButtons: [
                                {
                                  id: 'backPress',
                                  text: 'Back',
                                  icon: menu,
                                },
                              ],
                              visible: true,
                            },
                            bottomTab: {
                              fontSize: 10,
                              selectedIconColor: Colors.primary,
                              icon: library,
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
  });
}
