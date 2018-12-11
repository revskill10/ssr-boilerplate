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
