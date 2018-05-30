import React from 'react';
import { shallow } from 'enzyme';

import App from './App'
import { mapDispatchToProps } from './App'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })

  describe('componentDidMount', () => {

  })

  describe('fetchAllArticles', () => {

  })

  describe('mapDispatchToProps', () => {

    it('returns an object with a populateArticles function', () => {
      const dispatch = jest.fn();
      const mappedProps = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'POPULATE_ARTICLES',
        articles: ['wow', 'grandma', 'you', 'so', 'strong']
      }

      const result = mappedProps.populateArticles(mockAction);

      expect(result).toHaveBeenCalledWith(mockAction)

    })
  })

})