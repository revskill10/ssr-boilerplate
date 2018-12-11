import React from 'react'
import { AppContainer} from 'react-hot-loader'
import {hydrate} from 'react-dom'
import Router from './router'
const context = window.__NEXT_DATA__

const renderApp = () => {
  hydrate(
    <AppContainer>
    <Router {...context} />
  </AppContainer>
  , document.getElementById('app'))
}

if (module.hot) {
  module.hot.accept('./router', () => renderApp())
}
renderApp();
