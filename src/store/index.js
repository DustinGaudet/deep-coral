import {createStore, combineReducers} from 'redux'
import reducer from '../reducers'
import tasksReducer from '../reducers/tasksReducer'
import taskOrderReducer from '../reducers/taskOrderReducer'
import uuidv1 from 'uuid/v1'

const store = createStore(
  combineReducers({
    tasks: tasksReducer,
    taskOrder: taskOrderReducer
  })
)

store.dispatch({
  type: 'CREATE_TASK', 
  payload: {
    id: uuidv1(),
    name: 'coolio'
  }
})

store.dispatch({
  type: 'CREATE_ORDERED_TASKLIST', 
  payload: {
    id: uuidv1(), 
    orderedTasklist: [
      uuidv1(), 
      uuidv1(), 
      uuidv1()
    ]
  }
})

console.log(store.getState())

export default store