import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import {renderRoutes} from 'react-router-config'
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

export default Router