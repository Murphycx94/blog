import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App'

function createApp () {
  return (
    <Router>
      <App />
    </Router>
  )
}

ReactDOM.hydrate(createApp(), document.getElementById('app'))
