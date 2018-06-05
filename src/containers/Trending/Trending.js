import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as helper from '../../helper';
import './Trending.css'

class Trending extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trendingWords: [],
      loading: ''
    }
  }

  componentDidMount() {
    if (!this.props.articles.length) {
      this.setState({ loading: 'wow such load' })
    }
    const trendingWords = helper.topTen(this.props.articles)
    this.setState({ trendingWords })
  }

  render() {
    const { trendingWords, loading } = this.state;
    const trending = trendingWords.map((word, index) => {
      return(
        <button 
          className='button'
          onClick={() => this.props.populateInputField(word)}
          key={index}
        >+ {word}</button>
      ) 
    })
    return (
      <div className='trending'>
        {loading !== '' ? loading : trending}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

export {
  Trending,
  mapStateToProps
}

export default connect(mapStateToProps)(Trending)