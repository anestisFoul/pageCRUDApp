import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
import { reducer as formReducer } from 'redux-form'
import filterReducer from '../reducers/filterReducer'
import pageReducer from '../reducers/pageReducer'

export default () => {
  const store = createStore(
    combineReducers({
      pagesStore: pageReducer,
      filters: filterReducer,
      form: formReducer
    }),
    applyMiddleware(promise(),thunk)
  );

  return store
}
