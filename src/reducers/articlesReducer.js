const articlesReducer = (state = [], action) => {
  switch(action.type) {
    case 'POPULATE_ARTICLES':
      return action.articles
    default:
      return state
  }
}

export default articlesReducer