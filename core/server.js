import React from 'react'
import {renderToString} from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import {renderRoutes, matchRoutes} from 'react-router-config'
import routes from '../routes'
import templateFn from './template';
import {inspect} from 'util'
import {withProps} from 'recompose'
export default (req, res) => {
  const {url} = req;
  const matches = matchRoutes(routes, url);
  let context = {};
  const promises = matches.map(({route}) => {
    const getInitialProps = route.getInitialProps;
    const initialProps = getInitialProps ? getInitialProps(context) : Promise.resolve(null)    
    return initialProps
  });
  return Promise.all(promises).then((r) => {
    matches.forEach(({route}) => {
      let component = withProps(props => {
        return {
          ...props,
          ...context,
        }
      })(route.component)
      const matched = routes.filter(r => r.path === route.path)
      matched.forEach(m => {
        m.component = component
      })
    })
    const content = renderToString(
      <StaticRouter location={url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    );
    const template = templateFn(content, JSON.stringify(context));
    res.send(template);
  });
}