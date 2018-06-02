const matchesReducer = (state =[], action) => {
  switch (action.type) {
    case 'CREATE_MATCH':
      return [...state, action.match]
    case 'DELETE_MATCH':
      return state.filter(match => match.id !== action.id)
    default:
      return state
  }
}

export default matchesReducer