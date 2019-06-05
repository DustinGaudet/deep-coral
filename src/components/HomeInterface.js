import React from 'react'
import {connect} from 'react-redux'
import './HomeInterface.scss'
import ProjectItem from './ProjectItem'

export const HomeInterface = ({taskOrder = {"root": []}, tasks = {}}) => {
  
  const projects = (taskOrder, tasks) => taskOrder.root.map(x => (
    <ProjectItem key={x} project={tasks[x]} />
  ))
  return (
    <div className="home-interface">
      <div className="user-modal-open-btn">User Modal open btn here</div>
      <div className="projects-list">
        <ul>
          {taskOrder.root.length && projects(taskOrder, tasks)}
        </ul>
      </div>
      <div className="new-project-modal-open-btn">New Project modal open btn here</div>
    </div>
  )
}

const ConnectedHomeInterface = connect((state)=> {
  return {
    taskOrder: state.taskOrder,
    tasks: state.tasks,
  }
})(HomeInterface)

export default ConnectedHomeInterface