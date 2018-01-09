import React from 'react'
import { withRouter } from 'react-router'

import Button from './Button'

export default withRouter(({ text, style, history }) => <Button onClickAction={history.goBack} text={text} style={style} />)
