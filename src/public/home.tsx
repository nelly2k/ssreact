
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Hello } from './hello'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.hydrate(
  <Router><Hello name={(window as any).__INITIAL__DATA__.name} /></Router>,
  document.getElementById('root')
)

