import React from 'react'

const Match = (props) => {
  const { match } = props
  const keywords = match.keywords.map(keyword => {
    return(
      <h1>{keyword}</h1>
    )
  })
  const articles = match.articles.map(article => {
    return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </div>
    )
  })
  return (
    <div>
      <div>
        {keywords}
      </div>
      <div>
        {articles}
      </div>
    </div>
  )
}

export default Match