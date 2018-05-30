import React from 'react';
import { shallow } from 'enzyme';
import {
  Search,
  mapStateToProps,
  mapDispatchToProps
} from './Search';

describe('Search', () => {

  let wrapper;
  let mockProps;

  beforeEach(() => {
    
    mockProps = 'wow'
    wrapper = shallow(<Search props={mockProps} />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {

    it('sets the state of the Search component based on the the value of the input field', () => {

    })
  })

  describe('handleSubmit', () => {

    it('calls the createKeywords method', () => {

    })

    it('calls the findArticles method with the correct arguments', () => {

    })

    it('calls the createMatchObject method with the correct arguments', () => {

    })

    it('calls this.props.createMatch with the correct arguments', () => {

    })
  })

  describe('createKeywords', () => {

    it('returns an array of keywords', () => {

    })
  })

  describe('createMatchObject', () => {

    it('returns an object with a key of keywords and a key of articles', () => {

    })
  })

  describe('findArticles', () => {

    it('returns an array of articles that match every word in the array that is passed in', () => {

    })
  })

  describe('mapStateToProps', () => {

    it('returns an object with articles from the store', () => {

    })
  })

  describe('mapDispatchToProps', () => {

    it('returns an object with a createMatch function', () => {

    })

    it('calls dispatch with the correct arguments', () => {
      
    })
  })
})
