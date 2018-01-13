import React from 'react'
import { shallow } from 'enzyme'

import QuestionTileComponent from '../QuestionTileComponent'

const props = { text : "question text", points : 0 }
const component = shallow(<QuestionTileComponent { ...props } />)

describe('QuestionTileComponent tests :', () => {

  it('should properly render component', () => {
    expect(component).toMatchSnapshot()
  })

  it('should render question text', () => {
    const text = component.find('.question-text').text()
    expect(text).toBe("question text")
  })

  it('should render question points', () => {
    const points = component.find('.question-points').text()
    expect(points).toBe("0")
  })


})
