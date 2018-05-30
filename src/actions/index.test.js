import {
  populateArticles,
  createMatch
} from './index';

describe('Action Creators', () => {

  describe('populateArticles', () => {

    it('creates an action with the correct payload and type', () => {
      const mockArticles = ['boo Trump', 'Trump is a garbage man']
      const expected = {
        type: 'POPULATE_ARTICLES',
        articles: mockArticles
      }

      const result = populateArticles(mockArticles)

      expect(result).toEqual(expected)
    })
  })

  describe('createMatch', () => {

    it('creates an action with the correct payload and type', () => {
      const match = {
        keywords: ['garbage', 'man', 'wow'], 
        articles: [
          {title: 'Wow, Trump says, as he is consumed by a rabid garbage man'},
          {title: 'Man says wow as he throws garbage onto front lawn of the white house'}
          ]
      }
      
      const expected = {
        type: 'CREATE_MATCH',
        match
      }

      const result = createMatch(match)

      expect(result).toEqual(expected)
    })
  })
})