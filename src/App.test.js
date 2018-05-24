import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  })

  describe('fetchAllArticles', () => {

  })
})
