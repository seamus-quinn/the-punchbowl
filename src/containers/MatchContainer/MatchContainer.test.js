import React from 'react';
import { shallow } from 'enzyme';
import {
  MatchContainer,
  mapStateToProps
} from './MatchContainer'

describe('MatchContainer', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      matches: [
        {
          keywords: ['cheeseburger', 'cheeseburger', 'cheeseburger'],
          articles: [
            {
              title: 'Wow, much cheeseburger',
              description: 'Holy cow this cheeseburger is the best thing I have eaten in the last 25 minutes'
            }
          ]
        }
      ]
    }
    wrapper = shallow(<MatchContainer matches={mockProps} />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })

  it('returns a Match componets if the matches array received from store has length', () => {
    
  })

  describe('mapStateToProps', () => {

    it('updates MatchContainer props with matches from store', () => {
      const state = {
        matches: [
          {
            keywords: ['cheeseburger', 'cheeseburger', 'cheeseburger'],
            articles: [
              {
                title: 'Wow, much cheeseburger',
                description: 'Holy cow this cheeseburger is the best thing I have eaten in the last 25 minutes'
              }
            ]
          }
        ],
        garbage: 'garbage'   
      }

      const expected = state.matches
      const result = mapStateToProps(state);

      expect(result.matches).toEqual(expected)
    })
  })
})