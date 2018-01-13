import React from 'react'
import { shallow } from 'enzyme'

import QuestionTileGridComponent from '../QuestionTileGridComponent'

const component = shallow(<QuestionTileGridComponent />)

describe('QuestionTileGridComponent tests :', () => {

  it('should render properly', () => {
    expect(component).toMatchSnapshot()
  })

})
