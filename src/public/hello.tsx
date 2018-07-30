import * as React from "react";
import { Link } from 'react-router-dom'
import { Routes } from "../routes";
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware, ReducersMapObject, combineReducers, Store } from 'redux'
import { History } from 'history';
import { createMemoryHistory } from 'history';

interface IProps{
  name:string;
}
// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
// const history = createBrowserHistory({ basename: baseUrl });

export class Hello extends React.Component<IProps>{
  
  store = configureStore(createMemoryHistory(),{story:{stories:[]}});
  
  render(){
    return <div>
    <h1>Hello, {this.props.name}!</h1>
    <ul>
      <li><Link to="/">Page 1</Link></li>
      <li><Link to="/page2">Page 2</Link></li>
      <li><Link to="/page3">Page 3</Link></li>
    </ul>
    <hr />
    <Provider store={this.store}>
    <Routes/>
    </Provider>
  </div>
  }
}

import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducers, ApplicationState } from "../state/store";

function configureStore(history: History, initialState:ApplicationState){
  // const windowIfDefined = typeof window === 'undefined' ? null : window as any;
  // If devTools is installed, connect to it
  // const devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__ as () => StoreEnhancer;
  const createStoreWithMiddleware = compose(
      applyMiddleware(thunk, routerMiddleware(history)))(createStore);

  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = buildRootReducer(reducers);
  const store = createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;
  return store;
}


function buildRootReducer(allReducers: ReducersMapObject<ApplicationState>) {
  return combineReducers<ApplicationState>(Object.assign({}, allReducers, { routing: routerReducer }));
}