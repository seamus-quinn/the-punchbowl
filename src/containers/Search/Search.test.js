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
    
    mockProps = {
      articles: [
        {
          title: 'Sushi prices skyrocket as Trump bans tuna, deeming it Un-American',
          description: 'I cannot believe it says crestfallen Seamus Quinn...'
        }
      ],
      createMatch: jest.fn()
    }
    wrapper = shallow(<Search props={mockProps} />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {

    it('sets the state of the Search component based on the the value of the input field', () => {
      const wrapperInst = wrapper.instance();
      const mockEvent = {target: {value: 'Sushi garbage'}}

      wrapperInst.handleChange(mockEvent)

      expect(wrapperInst.state.userInput).toEqual(mockEvent.target.value)
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

    it('splits user input and returns an array of keywords', () => {
      const wrapperInst = wrapper.instance();
      const mockUserInput = 'Jungle sushi is unacceptable';

      wrapperInst.setState({ userInput: mockUserInput })

      const expected = ['Jungle', 'sushi', 'is', 'unacceptable']
      const result = wrapperInst.createKeywords();

      expect(result).toEqual(expected)
    })
  })

  describe('createMatchObject', () => {

    it('returns an object with a key of keywords and a key of articles', () => {
      const mockKeywords = ['bingo', 'bango', 'bongo'];
      const mockArticles = [
        {
          title: 'Sushi prices skyrocket as Trump bans tuna, deeming it Un-American',
          description: 'I cannot believe it says crestfallen Seamus Quinn...'
        }
      ]

      const result = wrapper.instance().createMatchObject(mockKeywords, mockArticles);

      const expected = {
        keywords: mockKeywords,
        articles: mockArticles
      }

      expect(result).toEqual(expected)

    })
  })

  describe('findArticles', () => {

    it('returns an array of articles that contain every word in the keywords array that is passed in in either their title or description ', () => {
      const mockKeywords = ['bingo', 'bango']; 
          
      const wrapperInst = wrapper.instance();

      const result = wrapperInst.findArticles(mockKeywords)


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
