import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

import './App.css';
import * as apiCalls from '../apiCalls';
import { populateArticles } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domains: ['npr.org', 'nytimes.com', 'nbcnews.com', 'theatlantic.com', 'ap.org', 'c-span.org', 'foxnews.com', 'wsj.com', 'cato.org', 'breitbart.com'],
      matches: [],
    }
  }

  async componentDidMount() {
    // console.log(firebase.database())
    // // firebase.database().ref('mockData/').set({
    // //   seamus: 'garbage',
    // //   garbage: 'seamus'
    // // })
    // await this.fetchAllArticles()
  }

  fetchAllArticles = async () => {
    const { domains } = this.state
    const articles = []
    domains.map(async domain => {
      for (let i = 1; i < 2; i++) {
        const articlesToStore = await apiCalls.fetchArticles(domain, i)
        articles.push(...articlesToStore.articles)
      }
    })
    this.props.populateArticles(articles)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
