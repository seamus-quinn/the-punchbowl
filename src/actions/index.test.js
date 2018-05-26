import {
  populateArticles
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
})