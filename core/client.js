import React from 'react'
import {hydrate} from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import {renderRoutes, matchRoutes} from 'react-router-config'
import { withProps } from 'recompose';
import routes from '../routes'

const Router = (props) => {
  const newRoutes = routes.map(r => {
    return {
      ...r,
      component: withProps(old => {
        return {
          ...old,
          ...props,
        }
      })(r.component)
    }
  })
  return (
    <BrowserRouter>
      {renderRoutes(newRoutes)}
    </BrowserRouter>
  )
}

const context = window.__NEXT_DATA__

hydrate(<Router {...context} />, document.getElementById('app'))