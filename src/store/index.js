import {createStore, combineReducers} from 'redux'
import reducer from '../reducers'
import tasksReducer from '../reducers/tasksReducer'
import taskOrderReducer from '../reducers/taskOrderReducer'

export default () => {
  const store = createStore(
    combineReducers({
      tasks: tasksReducer,
      taskOrder: taskOrderReducer
    })
  )
  return store
}