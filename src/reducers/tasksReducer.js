import initialState from './initialState.json'
import {values} from 'lodash'

export default (state = {...initialState.tasks}, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
    case 'UPDATE_TASK':
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      }
    case 'DELETE_TASK':
      const {[action.payload.id]: discard, ...newState} = state
      return newState
    default: 
      return state
  }
}