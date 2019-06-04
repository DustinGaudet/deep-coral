import React from 'react'
import renderer from 'react-test-renderer';
import Modal from './Modal'

describe('Basic Modal tests', () => {
    it('renders without crashing', () => {
        renderer.create(<Modal />)
    })
    
});