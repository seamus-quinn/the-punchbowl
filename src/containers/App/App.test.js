import React from 'react';
import { shallow } from 'enzyme';

// import from './App'
import { App, mapDispatchToProps } from './App'

describe('App', () => {
  let wrapper
  let mockProps

  beforeEach(() => {
    mockProps = {
      populateArticles: jest.fn()
    }
    wrapper = shallow(<App {...mockProps}/>)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })

  describe('componentDidMount', () => {

  })

  describe('fetchAllArticles', () => {

  })

  describe('checkFirebase', () => {
    
    let mockData;

    beforeEach(() => {
      mockData = {
        articles: [
          {title: 'Roseanne pops an ambien and calls Trump a peach'},
          {title: 'J.R. Smith forgets to put on his shoes before Game 2'}
        ],
        timeStamp: 1
      }
    })

    it('calls populateArticles with the correct arguments if the elapsed time is less than 12 hours', () => {
      const wrapperInst = wrapper.instance();

      Date.now = jest.fn().mockImplementation(() => 4)

      mockData.val = jest.fn().mockImplementation(() => mockData)

      wrapperInst.checkFirebase(mockData)

      expect(wrapperInst.props.populateArticles).toHaveBeenCalledWith(mockData.articles)
    })

    it('calls fetchAllArticles if the elapsed time is greater than or equal to 12 hours', () => {

    })

    it('flattens the arrays received from fetchAllArticles if the the elapsed time is greater than or equal to 12 hours', () => {

    })

    it('calls populateArticles with the correct arguments if the elapsed time is greater than or equal to 12 hours', () => {

    })

    it('sends updated information to firebase database if the elapsed time is greater than or equal to 12 hours', () => {

    })

  })

  describe('mapDispatchToProps', () => {

    it('returns an object with a populateArticles function', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      expect(typeof result.populateArticles).toEqual('function')

    })

    it('calls dispatch with the correct arguments', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'POPULATE_ARTICLES',
        articles: ['wow', 'grandma', 'you', 'so', 'strong']
      }

      result.populateArticles(mockAction.articles);

      expect(dispatch).toHaveBeenCalledWith(mockAction)
    })
  })

})