import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './global-styles'

import App from './App'
import store from './store'

render(
  <Provider store={store}>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
)