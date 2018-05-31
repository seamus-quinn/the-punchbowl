import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as helper from '../../helper';
import './Trending.css'

class Trending extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trendingWords: []
    }
  }

  componentDidMount() {
    const trendingWords = this.topTen(this.props.articles)
    this.setState({ trendingWords })
  }

  topTen = (arr) => {
    const words = helper.makeWordsArr(arr)
    const wordObj = helper.countWords(words);
    const keys = Object.keys(wordObj);
    const sorted = keys.sort((a, b) => {
      return wordObj[b] - wordObj[a];
    })
    const cleaned = helper.cleanWords(sorted)
    console.log(cleaned.slice(0, 10))
    return cleaned.slice(0, 10)
  }

  render() {
    const { trendingWords } = this.state;
    const trending = trendingWords.map(word => {
      return(
        <button 
          className='button'
          onClick={() => this.props.populateInputField(word)}
        >+ {word}</button>
      ) 
    })
    return (
      <div className='trending'>
        {trending}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

export {
  Trending
}

export default connect(mapStateToProps)(Trending)