import React from 'react'
import {renderToString} from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import {renderRoutes, matchRoutes} from 'react-router-config'
import routes from '../routes'
import templateFn from './template';

export default (req, res) => {
  const {url} = req;
  const matches = matchRoutes(routes, url);
  const context = {};
  const promises = matches.map(({route}) => {
    const getInitialProps = route.component.getInitialProps;
    return getInitialProps ? getInitialProps(context) : Promise.resolve(null)
  });
  return Promise.all(promises).then(() => {
    const content = renderToString(
      <StaticRouter location={url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    );
    const template = templateFn(content);
    res.send(template);
  });
}