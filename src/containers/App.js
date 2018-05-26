import React, { Component } from 'react';
import './App.css';
import * as apiCalls from '../apiCalls'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domains: ['npr.org', 'nytimes.com', 'breitbart.com'],
      matches: [],
      articles: [],
    }
  }

  async componentDidMount() {
    await this.fetchAllArticles()
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

export default App;
