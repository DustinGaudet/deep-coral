import React from 'react'
import renderer from 'react-test-renderer';
import TaskDetailInterface from './TaskDetailInterface'

describe('Basic TaskDetailInterface tests', () => {
    it('renders without crashing', () => {
        renderer.create(<TaskDetailInterface />)
    })
    
});