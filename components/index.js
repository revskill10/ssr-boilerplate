import React from 'react'
import loadable from '@loadable/component'
import {Helmet} from "react-helmet";

const Nav = loadable(() => import('./nav'))

const Index = () => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Nav />
      Hello 1 2fdsf
      Good! hgj dsdsdsd dung 23
    </div>
  )
}

export default Index
