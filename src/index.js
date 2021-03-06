import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import configureStore from './store'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

const render = () => {
  ReactDOM.render( jsx, document.getElementById('app') )
}

render()
store.subscribe(render)