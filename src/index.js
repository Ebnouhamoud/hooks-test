import React from 'react'
import ReactDOM from 'react-dom'
// import reactime from 'reactime';
import reactime from 'reactime'

import './index.css'
import App from './App'
import reactMonitor from 'reactmonitorfiber'
ReactDOM.render(<App />, document.getElementById('root'))
// reactime(document.getElementById('root'))
reactMonitor(document.getElementById('root'));
reactime(document.getElementById('root'))