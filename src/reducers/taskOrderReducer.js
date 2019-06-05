import initialState from './initialState.json'
import uuidv1 from 'uuid/v1'
import {values} from 'lodash'

export default (state = {...initialState.taskOrder}, action) => {
  switch (action.type) {
    case 'CREATE_ORDERED_TASKLIST':
    case 'UPDATE_ORDERED_TASKLIST':
      return {
        ...state,
        [action.payload.id]: action.payload.orderedTasklist
      }
    case 'DELETE_ORDERED_TASKLIST':
      const {[action.payload.id]: discard, ...newState} = state
      return newState
    default: 
      return state
  }
}