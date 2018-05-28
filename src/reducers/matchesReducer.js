const matchesReducer = (state =[], action) => {
  switch (action.type) {
    case 'CREATE_MATCH':
      return [...state, action.match]
    default:
      return state
  }
}

export default matchesReducer