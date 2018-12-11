# ssr-boilerplate
Simple SSR boilerplate that just works.


## Define your routes

```js
import Index from './components/index'
import List from './components/list'
import fetch from 'isomorphic-unfetch'
const getText = async () => {
  const res = await fetch('https://api.github.com/users/octocat');
  return await res.json()
}
const routes = [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/list',
    component: List,
    getInitialProps: async (context) => {
      context.text = await getText();
    }
  }
]

export default routes;
```

One addition is the `getInitialProps`, it's the async function that will run on server to inject remote data for your component.

## Define your component.

Note: All React components must reside inside `components` folder.

```js
import React from "react";
import Nav from './nav'

export default class List extends React.Component {
  render() {
    const {text} = this.props
    return (
      <div>
        <Nav />
        {text.login}
      </div>
    )
  }
}
```

`nav.js`
```js
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
    </ul>
  )
}

export default Nav
```
