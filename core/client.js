import React from 'react'
import {hydrate} from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import {renderRoutes} from 'react-router-config'
import routes from '../routes'
import { withProps } from 'recompose';

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
const data = window.__NEXT_DATA__
hydrate(<Router {...data} />, document.getElementById('app'))

