import React from 'react'
import renderer from 'react-test-renderer';
import ProjectItem from './ProjectItem'

describe('Basic ProjectItem tests', () => {
    const project = {}

    it('renders without crashing', () => {
        renderer.create(<ProjectItem project={project}/>)
    })
    
});