import _ from 'lodash';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const convertDataToSection = (data, NAME) => {
  const arr = [];
  _.map(data, (value, key) => {
    if (NAME[key] && value.length > 0) {
      arr.push({title: NAME[key], key: key, data: [{data: value}]});
    }
  });

  return arr;
};

export const countStars = (starsRating, styleChecked, styleUnChecked) => {
  let star = [];
  for (var i = 0; i < 5; i++) {
    if (i < starsRating) {
      star[i] = <Icon style={styleChecked} name="star" />;
    } else {
      star[i] = <Icon style={styleUnChecked} name="star" />;
    }
  }
  return star;
};
