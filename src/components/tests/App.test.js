import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

const app = shallow(<App />)

describe('App component tests', () => {

  it('should properly render component', () => {
    expect(app).toMatchSnapshot()
  })

})
