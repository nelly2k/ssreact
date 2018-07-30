import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducers, ApplicationState } from "../state/store";
// import { createStore, compose, applyMiddleware, ReducersMapObject, combineReducers, Store,StoreEnhancerStoreCreator, StoreEnhancer } from 'redux'
import { createStore,  applyMiddleware, ReducersMapObject, combineReducers} from 'redux'
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension'

export function configureStore(history: History, initialState:ApplicationState){
//    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
  // If devTools is installed, connect to it

  const middlewares = [thunk, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares)

 const enhancers = [middlewareEnhancer]
 const composedEnhancers = composeWithDevTools(...enhancers)

//    const devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__ as () => StoreEnhancer;
//   const createStoreWithMiddleware = compose(
//       applyMiddleware(thunk, routerMiddleware(history)),
//       devToolsExtension() 
    
//     )(createStore);

  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = buildRootReducer(reducers);

//   const store = createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;
  const store = createStore(allReducers, initialState, composedEnhancers)

  return store;
}


function buildRootReducer(allReducers: ReducersMapObject<ApplicationState>) {
  return combineReducers<ApplicationState>(Object.assign({}, allReducers, { routing: routerReducer }));
}