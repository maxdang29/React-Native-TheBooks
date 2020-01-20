import {isString, isArray} from 'lodash';

export const component = (component, passProps, options, id = null) => {
  return isString(component)
    ? {component: {id: id, name: component, passProps, options}}
    : component;
};

export const stack = (rawChildren, options) => {
  const childrenArray = isArray(rawChildren) ? rawChildren : [rawChildren];
  const children = childrenArray.map(child => component(child));
  return {
    stack: {
      children,
      options: options,
    },
  };
};
export const bottomTabs = (children, options) => {
  const bottomTabs = {
    children: isArray(children) ? children : [children],
    options: options,
  };

  return {bottomTabs: bottomTabs};
};

export const sideMenu = (
  leftSideMenu,
  children,
  options,
  forBottomTabs = false,
) => {
  const center = forBottomTabs
    ? bottomTabs(children, options)
    : stack(children, options);
  const sideMenu = {
    left: leftSideMenu,
    center: center,
  };
  return {sideMenu: sideMenu};
};
