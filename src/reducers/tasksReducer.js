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
      return {
        ...values(state).filter(x => x.id !== action.payload.id)
      }
    default: 
      return state
  }
}