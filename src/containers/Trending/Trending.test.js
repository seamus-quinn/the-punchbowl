import React from 'react';
import { Trending } from './Trending'
import { shallow } from 'enzyme';
import * as helper from '../../helper'

describe('Trending', () => {

  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      keywords: ['wow', 'such', 'garbage'],
      articles: [
        {
          title: 'Bummer Dude',
          description: 'I forgot my charger at Turing and now I have to go back :('
        }
      ]
    }
    wrapper = shallow(<Trending {...mockProps} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {

    it('sets the state to loading if the props inherited are not preseent', () => {

    })

    it('calls topTen with the correct arguments', () => {
      
    })

    it('sets the state of trendingWords once it receives props', () => {

    })
  })


})