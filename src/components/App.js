import React, {Component} from 'react'
import './App.scss'
import HomeInterface from './HomeInterface'
import TasksInterface from './TasksInterface'
import TaskDetailInterface from './TaskDetailInterface'
import Modal from './Modal.js'
import {toArrayWithKey} from '../utils'

class App extends Component {

  state = {
    tasks: {
      "2019-06-01-a8b02624": {
        name: "Cool Project 1"
      },
      "2019-06-02-c8b94323": {
        name: "Cool Project 2"
      },
      "2019-06-04-e8b89425": {
        name: "Cool Project 3"
      },
    }
  }

  render() {

    return (
      <div className="app">
        <HomeInterface projects={toArrayWithKey(this.state.tasks, 'id')} />
        <TasksInterface />
        <TaskDetailInterface />
        <Modal />
      </div>
    )
  }
} 

export default App