const matchesReducer = (state =[], action) => {
  switch (action.type) {
    case 'CREATE_MATCH':
      return action.matches
    default:
      return state
  }
}

export default matchesReducer