const populateArticles = (articles) => ({
  type: 'POPULATE_ARTICLES',
  articles
})

const createMatch = (match) => ({
    type: 'CREATE_MATCH',
    match
})

const deleteMatch = (id) => ({
  type: 'DELETE_MATCH',
  id
})


export {
  populateArticles,
  createMatch, 
  deleteMatch
}