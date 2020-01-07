import {Navigation} from 'react-native-navigation';
import Icons from 'react-native-vector-icons/Ionicons';

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
                          bottomTab: {
                            fontSize: 12,
                            icon: require('../../Image/dn.jpg'),
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
                                icon: require('../../Image/menu.png'),
                                fontSize: 12,
                              },
                            ],
                            visible: true,
                          },
                          bottomTab: {
                            fontSize: 12,

                            icon: require('../../Image/dn.jpg'),
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
                                icon: require('../../Image/menu.png'),
                              },
                            ],
                            visible: true,
                          },
                          bottomTab: {
                            fontSize: 12,

                            icon: require('../../Image/dn.jpg'),
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
                                icon: require('../../Image/menu.png'),
                              },
                            ],
                            visible: true,
                          },
                          bottomTab: {
                            fontSize: 12,
                            icon: require('../../Image/dn.jpg'),
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
                                icon: require('../../Image/menu.png'),
                              },
                            ],
                            visible: true,
                          },
                          bottomTab: {
                            fontSize: 12,

                            icon: require('../../Image/dn.jpg'),
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
}
