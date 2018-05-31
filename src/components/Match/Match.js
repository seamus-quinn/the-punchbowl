import React from 'react';
import './Match.css';

const Match = (props) => {
  const { match } = props
  const keywords = match.keywords.map(keyword => {
    return(
      <h1>{keyword}</h1>
    )
  })
  const articles = match.articles.map(article => {
    return (
      <div className='article-card'>
        <img src={article.urlToImage} className='image' />
        <div className='card-info'>
          <h1 className='article-title'>
            {article.title}
          </h1>
          <p className='article-description'>
            {article.description}
          </p>
          <a
            href={article.url}
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
        {keywords}
      </div>
      <div className='article-container'>
        {articles}
      </div>    
    </div>
  )
}

export default Match