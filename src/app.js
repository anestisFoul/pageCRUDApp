import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './routes/router'
import storeConfig from './store/storeConfig'
import showPages from './helpers/sorting'
import 'normalize.css/normalize.css'
import 'semantic-ui-css/semantic.min.css'
import './styles/styles.scss'

import { addPage, fetchPages } from './actions/pageActions'

const store = storeConfig()
store.dispatch(fetchPages())
const state = store.getState()
const finalPages = showPages(state.pagesStore.pages, state.filters)

const App = (
  <Provider store={store}>
    <Router />
  </Provider>
)

ReactDOM.render(App, document.getElementById('app'))
