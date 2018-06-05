import React from 'react';
import { shallow } from 'enzyme';
import {
  Search,
  mapStateToProps,
  mapDispatchToProps
} from './Search';
import * as helper from '../../helper'

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
    wrapper = shallow(<Search {...mockProps} />)
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
      const wrapperInst = wrapper.instance();
      const mockEvent = { preventDefault: jest.fn() };
      wrapperInst.createKeywords = jest.fn();
      wrapperInst.findArticles = jest.fn();
      helper.createMatchObject = jest.fn().mockImplementation(() => {
        return {
          articles: ['now i am at camerons house']
        }
      });

      wrapperInst.handleSubmit(mockEvent);

      expect(wrapperInst.createKeywords).toHaveBeenCalled();
    })

    it('calls the findArticles method with the correct arguments', () => {
      const wrapperInst = wrapper.instance();
      const mockKeyWords = ['wow', 'much', 'fun']
      const mockEvent = { preventDefault: jest.fn() };
      wrapperInst.createKeywords = jest.fn().mockImplementation(() => mockKeyWords);
      wrapperInst.findArticles = jest.fn();
      helper.createMatchObject = jest.fn().mockImplementation(() => {
        return {
          articles: ['now i am at camerons house']
        }
      });

      wrapperInst.handleSubmit(mockEvent);

      expect(wrapperInst.findArticles).toHaveBeenCalledWith(mockKeyWords);
    })

    it('calls the createMatchObject method with the correct arguments', () => {

      const wrapperInst = wrapper.instance();
      const mockKeyWords = ['wow', 'much', 'fun']
      const mockEvent = { preventDefault: jest.fn() };
      const mockArticles = [
        {
          title: 'Sushi prices skyrocket as Trump bans tuna, deeming it Un-American',
          description: 'I cannot believe it says crestfallen Seamus Quinn...'
        }
      ];
      wrapperInst.createKeywords = jest.fn().mockImplementation(() => mockKeyWords);
      wrapperInst.findArticles = jest.fn().mockImplementation(() => mockArticles);
      helper.createMatchObject = jest.fn().mockImplementation(() => {
        return {
          articles: ['now i am at camerons house']
        }
      });

      wrapperInst.handleSubmit(mockEvent);

      expect(helper.createMatchObject).toHaveBeenCalledWith(mockKeyWords, mockArticles);

    })

    it('calls this.props.createMatch with the correct arguments', () => {
      const wrapperInst = wrapper.instance();
      const mockMatches = {
          keywords: ['wow', 'much', 'fun'],
          articles: [
            {
              title: 'Sushi prices skyrocket as Trump bans tuna, deeming it Un-American',
              description: 'I cannot believe it says crestfallen Seamus Quinn...'
            }
          ]
        }
      wrapperInst.setState({ userInput: 'wow'})
      const mockEvent = { preventDefault: jest.fn() };
      wrapperInst.createKeywords = jest.fn();
      wrapperInst.findArticles = jest.fn();
      helper.createMatchObject = jest.fn().mockImplementation(() => mockMatches);

      wrapperInst.handleSubmit(mockEvent);

      expect(wrapperInst.props.createMatch).toHaveBeenCalledWith(mockMatches);
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

  describe('findArticles', () => {

    it('returns an array of articles that contain every word in the keywords array that is passed in in either their title or description ', () => {
      const mockKeywords = ['bingo', 'bango']; 
          
      const wrapperInst = wrapper.instance();

      // const result = wrapperInst.findArticles(mockKeywords)


    })

    describe('populateInputField', () => {

      it('sets state to be the word passed in if input field is empty', () => {

        wrapper.instance().populateInputField('wow');

        expect(wrapper.state('userInput')).toEqual('wow')
      })

      it('sets state to be whatever is already there plus the new word passed in if input field has words in it', () => {
        wrapper.setState({userInput: 'hahaha'})
        wrapper.instance().populateInputField('wow')

        expect(wrapper.state('userInput')).toEqual('hahaha wow')
      })
    })

    describe('clearInputField', () => {

      it('sets userInput to be an empty string', () => {
        const mockEvent = {
          preventDefault: jest.fn()
        }

        wrapper.setState({ userInput: 'boston baked beans'})
        wrapper.instance().clearInputField(mockEvent);
        expect(wrapper.state('userInput')).toEqual('')
      })
    })

  })

  describe('mapStateToProps', () => {

    it('returns an object with articles from the store', () => {
      const state = {
        articles: [
          {
            title: 'Sushi prices skyrocket as Trump bans tuna, deeming it Un-American',
            description: 'I cannot believe it says crestfallen Seamus Quinn...'
          }
        ]
      }

      const expected = state.articles;
      const result = mapStateToProps(state);

      expect(result.articles).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {

    it('returns an object with a createMatch function', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      expect(typeof result.createMatch).toEqual('function')
    })

    it('calls dispatch with the correct arguments', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'CREATE_MATCH',
        match: 'I am a match-maker'
      }

      result.createMatch(mockAction.match)

      expect(dispatch).toHaveBeenCalledWith(mockAction)
    })
  })
})
