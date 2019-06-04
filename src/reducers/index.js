import initialState from './initialState.json'
import uuidv1 from 'uuid/v1'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      const id = uuidv1()
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: {
            ...action.payload,
            id
          }
        }
      }
    default: 
      return state
  }
}