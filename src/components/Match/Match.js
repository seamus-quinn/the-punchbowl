import React from 'react';
import { connect } from 'react-redux'
import './Match.css';
import { deleteMatch } from '../../actions'

const Match = (props) => {
  const { match } = props
  console.log(props)
  const keywords = match.keywords.map(keyword => {
    return(
      <h1>{keyword}</h1>
    )
  })
  const articles = match.articles.map(article => {
    return (
      <div className='article-card'>
        <img src={article.urlToImage} alt='' className='image' />
        <div className='card-info'>
          <h1 className='article-title'>
            {article.title}
          </h1>
          <p className='article-description'>
            {article.description}
          </p>
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
        <div>{keywords}</div>
        <button onClick={() => props.deleteMatch(match.id)}>x</button>
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