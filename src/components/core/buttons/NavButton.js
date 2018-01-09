import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Button from './Button'

class NavButton extends Component {

  constructor() {
    super()
    this.navigateTo = this.navigateTo.bind(this)
  }

  navigateTo() {
    const { history, path } = this.props
    history.push(`/${path}`)
  }

  render() {
    const { text, style } = this.props
    return <Button onClickAction={this.navigateTo} text={text} style={style} />
  }

}

export default withRouter(NavButton);
