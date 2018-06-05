import React from 'react';
import { Trending } from './Trending'
import { shallow } from 'enzyme';
import * as helper from '../../helper'

describe('Trending', () => {

  let wrapper;
  let mockProps;
  let mockState;

  beforeEach(() => {
    mockState = {
      trendingWords: ['why', 'did', 'i', 'leave', 'my', 'charger', 'at', 'turing'],
      loading: ''
    };
    mockProps = {
      keywords: ['wow', 'such', 'garbage'],
      articles: [
        {
          title: 'Bummer Dude',
          description: 'I forgot my charger at Turing and now I have to go back :('
        }
      ],
      populateInputField: jest.fn()
    }
    wrapper = shallow(<Trending {...mockProps} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('calls populateInputField on click', () => {

    wrapper.setState({ ...mockState })

    wrapper.find('button').first().simulate('click');

    expect(wrapper.props.populateInputField).toHaveBeenCalled();
  })

  describe('componentDidMount', () => {

    it('sets the state to loading if the props inherited are not present', () => {

      mockProps = {
        keywords: ['wow', 'such', 'garbage'],
        articles: [],
        populateInputField: jest.fn()
      }

      wrapper = shallow(<Trending {...mockProps} />)

      expect(wrapper.state('loading')).toEqual('wow such load')
    })


    it('sets the state of trendingWords once it receives props', () => {
      wrapper.setState({ trendingWords: [] })

      wrapper = shallow(<Trending {...mockProps} />)

      helper.topTen = jest.fn().mockImplementation(() => {
        return ['i', 'turing', 'bummer', 'forgot', 'charger', 'dude', 'back', ':(']
      })

      expect(wrapper.state('trendingWords')).toEqual(['i', 'turing', 'bummer', 'forgot', 'charger', 'dude', 'back', ':('])

    })
  })

  describe('mapStateToProps', () => {

  })


})