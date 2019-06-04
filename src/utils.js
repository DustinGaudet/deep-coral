import {values, mapValues} from 'lodash'

export const toArrayWithKey = (obj, keyAs) => values(
  mapValues(obj, (value, key) => { 
    value[keyAs] = key; return value; 
  })
);