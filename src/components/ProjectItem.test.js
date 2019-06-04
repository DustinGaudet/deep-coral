import React from 'react'
import renderer from 'react-test-renderer';
import ProjectItem from './ProjectItem'

describe('Basic ProjectItem tests', () => {
    it('renders without crashing', () => {
        renderer.create(<ProjectItem />)
    })
});