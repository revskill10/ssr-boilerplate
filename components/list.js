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
