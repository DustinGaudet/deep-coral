import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './store'

const fancyLog = () => { 
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");  
  console.log(store.getState());
}
const app = document.getElementById('app')

const render = () => {
  fancyLog()
  ReactDOM.render( <App />, app )
}

render()
store.subscribe(render)