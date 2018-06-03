import matchesReducer from './matchesReducer';

describe('matchesReducer', () => {

  it('returns previous state if action type is invalid', () => {
    const mockAction = {
      type: 'BILBO_BAGGINS'
    }
    const state = [];
    const result = matchesReducer(state, mockAction);
    const expected = state;

    expect(result).toEqual(expected)

  })

  it('returns updated state if action type is CREATE_MATCH', () => {
    const mockAction = {
      type: 'CREATE_MATCH',
      match: {
        title: 'Helium Balloons on strike for HIGHER wages',
        description: 'Gary Berryman reports live from Pawnee, IN'
      }
    }
    const state = []
    const result = matchesReducer(state, mockAction);
    const expected = [mockAction.match];

    expect(result).toEqual(expected)
  })

  it('does not replace what is in state if there is already a match object present', () => {
    const mockAction = {
      type: 'CREATE_MATCH',
      match: {
        title: 'Helium Balloons on strike for HIGHER wages',
        description: 'Gary Berryman reports live from Pawnee, IN'
      }
    }
    const state = [
      {
        match: {
          title: 'Justin Bieber to star in a film about wildebeasts',
          description: 'Wow, said Justin.  I am just overwhelmed with the gravity of this role.'
        }
      }
    ]
    const result = matchesReducer(state, mockAction);
    const expected = [...state, mockAction.match];

    expect(result).toEqual(expected)
  })

  it('returns updated state if action type is DELETE_MATCH', () => {
    const mockState = [
      {
        keywords: ['blah', 'blach'],
        articles: ['wow', 'i', 'love', 'garbage'],
        id: 2342
      },
      {
        keywords: ['blah', 'wham'],
        articles: ['much', 'i', 'garbage', 'garbage'],
        id: 2482
      },
      {
        keywords: ['no', 'thank', 'you'],
        articles: ['these', 'are','articles'],
        id: 200
      }
    ]

    const mockAction = {
      type: 'DELETE_MATCH',
      id: 2482
    }

    const result = matchesReducer(mockState, mockAction)

    const expected = [
      {
        keywords: ['blah', 'blach'],
        articles: ['wow', 'i', 'love', 'garbage'],
        id: 2342
      },
      {
        keywords: ['no', 'thank', 'you'],
        articles: ['these', 'are', 'articles'],
        id: 200
      }
    ]

    expect(result).toEqual(expected)

  })
})