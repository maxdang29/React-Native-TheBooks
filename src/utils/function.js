import _ from 'lodash';

export const convertDataToSection = (data, NAME) => {
  const arr = [];
  _.map(data, (value, key) => {
    if (NAME[key] && value.length > 0) {
      arr.push({title: NAME[key], key: key, data: [{data: value}]});
    }
  });

  return arr;
};
