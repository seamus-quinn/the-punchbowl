import React from 'react';
import { connect } from 'react-redux'
import './Match.css';
import { deleteMatch } from '../../actions';
import * as helper from '../../helper';
import mitt from '../../assets/mitt.jpg'
import x from '../../assets/clear-button.svg'

const Match = (props) => {
  const { match } = props
  const keywords = match.keywords.map(keyword => {
    return(
      <h1>{keyword}</h1>
    )
  })

  const articles = match.articles.map(article => {
    const source = helper.cleanSource(article.source.name);
    const imageSource = helper.cleanImageUrl(article.urlToImage)

    return (
      <div className='article-card'>
        <img src={!imageSource ? mitt : article.urlToImage} alt='' className='image' />
        <div className='card-info'>
          <h1 className='article-title'>
            {article.title}
          </h1>
          <p className='article-description'>
            {article.description}
          </p>
          <p className='article-source'>Source: {source}</p>
          <a
            href={article.url}
            target='_blank'
            className='link-to-article'
          >
            View Article
          </a>
        </div>
      </div>
    )
  })
  return (
    <div className='track'>
      <div className='keyword-card'>
        <div className='keyword-text'>
          <h1>Matches:</h1>
          <div className='keyword-list'>
            {keywords}
          </div>
        </div>
        <button
          className='match-delete-button'
          onClick={() => props.deleteMatch(match.id)}
        >
          <img src={x} alt='' className='x' />
        </button>
        <p className='article-counter'>Number of Articles: {articles.length}</p>
      </div>
      <div className='article-container'>
        {articles}
      </div>    
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteMatch: (match) => dispatch(deleteMatch(match))
})

export default connect(null, mapDispatchToProps)(Match)