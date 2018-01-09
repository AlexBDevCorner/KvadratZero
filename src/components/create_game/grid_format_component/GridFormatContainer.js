import React, { Component } from 'react'
import GridFormatComponent from './GridFormatComponent'

import { formats } from '../../../config'

class GridFormatContainer extends Component {

  render() {
    return <GridFormatComponent formats={formats} />
  }

}

export default GridFormatContainer
