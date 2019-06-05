import React from 'react'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer';
import App from './App'
import configureStore from '../store'

const store = configureStore()

describe('Basic App tests', () => {
    it('renders without crashing', () => {
        renderer.create(<Provider store={store}><App /></Provider>)
    })
    
});