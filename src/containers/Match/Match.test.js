import React from 'react'
import { Match}  from './Match'
import { shallow, mount } from 'enzyme';
import * as helper from '../../helper'

describe('Match', () => {

  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      keywords: ['garbage', 'mullet', 'sushi'],
      articles: [
        {
          title: 'Garbage Man eats Sushi',
          description: 'Wow much mullets worn by enthusiasts',
        }
      ],
      source: {
        name: 'I am Justice Beavers'
      }
    }
    wrapper = shallow(<Match match={mockProps} />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })

  it('calls helper function cleanSource with the correct arguments', () => {
    const wrapper = mount(<Match match={mockProps} />)
    helper.cleanSource = jest.fn();

    expect(helper.cleanSource).toHaveBeenCalledWith(mockProps.source.name)
  })
})