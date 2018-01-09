import React, { Component } from 'react'
import { ipcRenderer as ipc } from 'electron'

import ipcChannels from '../../../../ipcChannels'

import Button from './Button'

export default ({ text, style }) => (<Button onClickAction={() => ipc.send(ipcChannels.appExit)} text={text} style={style} />)
