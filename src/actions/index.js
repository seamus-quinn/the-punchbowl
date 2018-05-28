const populateArticles = (articles) => ({
  type: 'POPULATE_ARTICLES',
  articles
})

const createMatch = (match) => ({
    type: 'CREATE_MATCH',
    match
})


export {
  populateArticles,
  createMatch
}