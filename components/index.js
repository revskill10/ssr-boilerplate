import React from 'react'
import loadable from '@loadable/component'

const Nav = loadable(() => import('./nav'))

const Index = () => {
  return (
    <div>
      <Nav />
      Hello
    </div>
  )
}

export default Index
