import React from 'react'
import renderer from 'react-test-renderer';
import TasksInterface from './TasksInterface'

describe('Basic TasksInterface tests', () => {
    it('renders without crashing', () => {
        renderer.create(<TasksInterface />)
    })
    
});