import _ from 'lodash'

export const toArrayWithKey = (obj, keyAs) => _.values(
  _.mapValues(obj, (value, key) => { 
    value[keyAs] = key; return value; 
  })
);