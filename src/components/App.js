import React, {Component} from 'react'
import './App.scss'
import HomeInterface from './HomeInterface'
import TasksInterface from './TasksInterface'
import TaskDetailInterface from './TaskDetailInterface'
import Modal from './Modal.js'

class App extends Component {

  state = {
    user: {
      name: "John Smith",
      email: "john.smith@gmail.com",
      profilePicture: "https://example.com/img-url.jpg"
    },
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
    },
    taskOrder: {
      "root": [
        "2019-06-01-a8b02624",
        "2019-06-02-c8b94323",
        "2019-06-04-e8b89425",
      ]
    },
    activeTaskId: "2019-06-01-a8b02624"
  }

  tasksInOrder = (taskOrderArr, tasksStateObj) => taskOrderArr.map(x => ({...tasksStateObj[x], id: x}))

  render() {
    const {tasks, taskOrder} = this.state
    return (
      <div className="app">
        <HomeInterface 
          taskOrder={taskOrder} 
          projects={this.tasksInOrder(taskOrder.root, tasks)} 
          />
        <TasksInterface />
        <TaskDetailInterface />
        <Modal />
      </div>
    )
  }
} 

export default App