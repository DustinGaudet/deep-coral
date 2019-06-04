import React from 'react'
import './ProjectItem.scss'

const ProjectItem = ({project: {name}}) => (
  <li className="project-item">
    {name}
  </li>
)

export default ProjectItem