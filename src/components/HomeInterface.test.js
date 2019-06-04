import React from 'react'
import renderer from 'react-test-renderer';
import HomeInterface from './HomeInterface'

describe('Basic HomeInterface tests', () => {
    it('renders without crashing', () => {
        renderer.create(<HomeInterface />)
    })
    
});