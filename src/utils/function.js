import _ from 'lodash';

export const convertDataToSection = (data, NAME) => {
  const arr = [];
  _.map(data, (value, key) => {
    if (NAME[key]) {
      arr.push({title: NAME[key], key: key, data: value});
    }
  });
  console.log('result data', arr);

  return arr;
};
