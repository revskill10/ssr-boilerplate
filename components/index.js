import React from 'react'
import loadable from '@loadable/component'

const Nav = loadable(() => import('./nav'))

const Index = () => {
  return (
    <div>
      <Nav />
      Hello 1 2fdsf
      Good! hgj dsdsdsd dung 23
    </div>
  )
}

export default Index
