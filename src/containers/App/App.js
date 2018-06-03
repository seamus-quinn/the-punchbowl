import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

import './App.css';
import * as apiCalls from '../../apiCalls';
import * as mockData from '../../mockData';
import { populateArticles } from '../../actions';

import Search from '../Search/Search'
import MatchContainer from '../MatchContainer/MatchContainer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mockDomains: ['npr.org'],
      domains: ['npr.org', 'nytimes.com', 'nbcnews.com', 'theatlantic.com', 'ap.org', 'c-span.org', 'foxnews.com', 'wsj.com', 'cato.org', 'breitbart.com'],
    }
  }

  fetchAllArticles = async () => {
    const { mockDomains } = this.state
    const articles = mockDomains.reduce( async (acc, domain) => {
      for (let i = 1; i < 2; i++) {
        const articlesToStore = await apiCalls.fetchArticles(domain, i)
        acc.push(...articlesToStore.articles)
      }
      return acc
    }, [])
    return articles
  }

  async componentDidMount() {
    const ref = firebase.database().ref('/')
    ref.on('value', this.getData);
  }

  getData = async (data) => {
    const currentTime = Date.now();
    const { articles, timeStamp } = data.val();
    if (currentTime - timeStamp >= 43200000) {
      let articles = await this.fetchAllArticles()
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
