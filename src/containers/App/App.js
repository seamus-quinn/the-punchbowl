import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

import './App.css';
import * as apiCalls from '../../apiCalls';
import * as helper from '../../helper'
import { populateArticles } from '../../actions';
import Search from '../Search/Search'
import MatchContainer from '../MatchContainer/MatchContainer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domains: ['npr.org', 'nytimes.com', 'nbcnews.com', 'theatlantic.com', 'ap.org', 'c-span.org', 'foxnews.com', 'wsj.com', 'cato.org', 'breitbart.com'],
    }
  }

  fetchAllArticles = async () => {
    const { domains } = this.state
    const allArticles = domains.map(async domain => {
      const domainArticles = []
      for (let i = 1; i < 10; i++) {
        const fetchedArticles = await apiCalls.fetchArticles(domain, i)
        domainArticles.push(...fetchedArticles)
      }
      return domainArticles;
    })
    return await Promise.all(allArticles)
  }

  componentDidMount() {
    const ref = firebase.database().ref('/')
    ref.on('value', this.checkFirebase);
  }

  checkFirebase = async (data) => {
    const currentTime = Date.now();
    const { articles, timeStamp } = data.val();
    console.log(currentTime - timeStamp)
    if (currentTime - timeStamp >= 43200000) {
      const nestedArticles = await this.fetchAllArticles();
      const articles = helper.flattenArrays(nestedArticles)
      this.props.populateArticles(articles)
      firebase.database().ref('/').set({
        timeStamp: currentTime,
        articles
      })
      console.log('ive done it!')
    } else {
      this.props.populateArticles(articles)
    }
  }


  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 className='app-title'>the punchBowl</h1>
        </header>
        <div className='border'></div>
        <Search />
        <MatchContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  populateArticles: (articles) => dispatch(populateArticles(articles))
})

const config = {
  apiKey: "AIzaSyDiBMqPsE5G7LQrVzd0SNdf_64Zi9zRgfI",
  authDomain: "the-punchbowl.firebaseapp.com",
  databaseURL: "https://the-punchbowl.firebaseio.com",
  projectId: "the-punchbowl",
  storageBucket: "the-punchbowl.appspot.com",
  messagingSenderId: "126203247142"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export {
  App,
  mapDispatchToProps
}

export default connect(null, mapDispatchToProps)(App)
