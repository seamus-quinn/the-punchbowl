import articlesReducer from './articlesReducer'

describe('articlesReducer', () => {

  it('returns previous state if action type is invalid', () => {
    const action = {
      type: 'GARBAGE_SUSHI',
    }

    const expected = []
    const result = articlesReducer(undefined, action)

    expect(result).toEqual(expected)
  })

  it('returns new state if action type is POPULATE_MOVIES', () => {
    const state = []
    const articles = ['Teletubbies Take Over London', 'Trump eats too many M & Ms before bed']
    const action = {
      type: 'POPULATE_MOVIES',
      articles
    }

    const expected = articles;
    const result = articlesReducer(state, action);

    expect(result).toEqual(expected);


  })
})