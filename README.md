# ssr-boilerplate
Simple SSR boilerplate that just works.

## Usage

```js
npm run dev
npm start
```

## Features

- Server side rendering
- Hot module replacement
- React Router
- React Helmet
- Dynamic component with `@loadable/component`

## Define your routes

```js
import Index from './components/index'
import List from './components/list'
import {getText} from './api'

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
import {getText} from '../api'
export default class List extends React.Component {
  async componentDidMount() {
    const {text} = this.props
    if (!text) {
      const tmp = await getText()
      this.setState({
        text: tmp
      })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      text: props.text
    }
  }

  render() {
    const {text} = this.state
    return (
      <div>
        <Nav />
        {text && text.login}
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
