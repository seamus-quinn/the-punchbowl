import React from 'react'
import Match from './Match'
import { shallow } from 'enzyme'

describe('Match', () => {

  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      keywords: ['garbage', 'mullet', 'sushi'],
      articles: [
        {
          title: 'Garbage Man eats Sushi',
          description: 'Wow much mullets worn by enthusiasts'
        }
      ]
    }
    wrapper = shallow(<Match match={mockProps} />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })
})