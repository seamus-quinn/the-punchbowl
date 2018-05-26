import React, { Component } from 'react';
import './App.css';
import * as apiCalls from '../apiCalls'
import * as firebase from 'firebase'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domains: ['npr.org', 'nytimes.com', 'nbcnews.com', 'theatlantic.com', 'ap.org', 'c-span.org', 'foxnews.com', 'wsj.com', 'cato.org', 'breitbart.com'],
      matches: [],
      articles: [],
    }
  }

  async componentDidMount() {
    console.log(firebase.database())
    // firebase.database().ref('mockData/').set({
    //   seamus: 'garbage',
    //   garbage: 'seamus'
    // })
    // await this.fetchAllArticles()
  }

  fetchAllArticles = async () => {
    const articles = this.state.domains.map(async domain => {
      for (let i = 1; i < 6; i++) {
        const articles = await apiCalls.fetchArticles(domain, i)
        this.state.articles.push(...articles.articles)
      }
    })
    this.setState({ articles })
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

export default App;
