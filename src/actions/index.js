const populateArticles = (articles) => ({
  type: 'POPULATE_ARTICLES',
  articles
})

const createMatch = (matches) => ({
  type: 'CREATE_MATCH',
  matches
})

const sendKeywords = (keywords) => ({
  type: 'SEND_KEYWORDS',
  keywords
})


export {
  populateArticles,
  createMatch,
  sendKeywords
}