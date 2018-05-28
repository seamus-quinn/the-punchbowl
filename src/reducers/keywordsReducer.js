const keywordsReducer = (state =[], action) => {
  switch (action.type) {
    case 'SEND_KEYWORDS':
      return action.keywords
    default:
      return state
  }
}

export default keywordsReducer