const articlesReducer = (state = [], action) => {
  switch(action.type) {
    case 'POPULATE_MOVIES':
      return action.articles
    default:
      return state
  }
}

export default articlesReducer