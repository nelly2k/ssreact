import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducers, ApplicationState } from "../state/store";
import { createStore, compose, applyMiddleware, ReducersMapObject, combineReducers, Store } from 'redux'
import { History } from 'history';

export function configureStore(history: History, initialState:ApplicationState){
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