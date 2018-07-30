
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Hello } from './hello'
import { BrowserRouter as Router } from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from 'react-redux'
import { configureStore } from "../state/configureStore";

//const baseUrl = document.getElementById('root')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: "/" });

const store = configureStore(history,{story:{stories:[]}});

ReactDOM.hydrate(
  <Router><Provider  store={store}>
    <Hello name={(window as any).__INITIAL__DATA__.name} /></Provider></Router>,
  document.getElementById('root')
)

