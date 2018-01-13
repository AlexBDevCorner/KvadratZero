import React from 'react'
import { shallow } from 'enzyme'

import { QuestionTileGridContainer } from '../QuestionTileGridContainer'

const container = shallow(<QuestionTileGridContainer />)

describe('QuestionTileGridContainer tests :', () => {

  it('should render properly', () => {
    expect(container).toMatchSnapshot()
  })

})
