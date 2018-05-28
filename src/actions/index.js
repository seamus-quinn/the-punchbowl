const populateArticles = (articles) => ({
  type: 'POPULATE_ARTICLES',
  articles
})

const createMatch = (matches) => ({
  type: 'CREATE_MATCH',
  matches
})

export {
  populateArticles,
  createMatch
}