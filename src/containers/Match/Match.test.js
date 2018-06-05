import React from 'react'
import {
  Match,
  mapDispatchToProps
} from './Match'
import { shallow, mount } from 'enzyme';
import * as helper from '../../helper'

describe('Match', () => {

  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      match: {
        keywords: ['garbage', 'mullet', 'sushi'],
        articles: [
          {
            title: 'Garbage Man eats Sushi',
            description: 'Wow much mullets worn by enthusiasts',
            source: {
              name: 'I am Justice Beavers'
            }
          }
        ],
      },
      deleteMatch: jest.fn()
    }
    wrapper = shallow(<Match {...mockProps} />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })

  it('calls prop function deleteMatch on click with the correct arguments', () => {

    wrapper.find('.match-delete-button').simulate('click')

    expect(wrapper.prop('deleteMatch')).toHaveBeenCalled()

  })

  describe('mapDispatchToProps', () => {

    it('calls dispatch with the correct arguments', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'DELETE_MATCH',
        id: 1
      }

      result.deleteMatch(mockAction.id)

      expect(dispatch).toHaveBeenCalledWith(mockAction)
    })

  })
})