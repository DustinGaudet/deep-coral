import React, {Component} from 'react'
import './App.scss'
import HomeInterface from './HomeInterface'
import TasksInterface from './TasksInterface'
import TaskDetailInterface from './TaskDetailInterface'
import Modal from './Modal.js'

class App extends Component {

  state = {
    adjective: 'mathematical'
  }

  render() {

    return (
      <div className="app">
        <HomeInterface />
        <TasksInterface />
        <TaskDetailInterface />
        <Modal />
      </div>
    )
  }
} 

export default App