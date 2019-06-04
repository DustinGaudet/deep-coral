import React from 'react'
import './HomeInterface.scss'
import ProjectItem from './ProjectItem'

const HomeInterface = ({projects}) => (
  <div className="home-interface">
    <div className="user-modal-open-btn">User Modal open btn here</div>
    <div className="projects-list">
      <ul>
        {projects && projects.map(x => <ProjectItem key={'project' + x.id} project={x} />)}
      </ul>
    </div>
    <div className="new-project-modal-open-btn">New Project modal open btn here</div>
  </div>
)

export default HomeInterface