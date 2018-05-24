import * as apiCalls from './apiCalls';
import * as mockData from './mockData';
import apiKey from './apiKey'

describe('fetchArticles', () => {
  let mockDomain;
  let mockPageNumber;
  let mockUrl;

  beforeEach(() => {
    mockDomain = 'npr.org';
    mockPageNumber = 1;
    mockUrl = `https://newsapi.org/v2/everything?domains=${mockDomain}&apiKey=${apiKey}&page=${mockPageNumber}`;
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData.npr),
      })
    );
  })

  it('calls fetch with the correct articles', async () => {

    await apiCalls.fetchArticles(mockDomain, mockPageNumber);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  })

  it('returns the correct data', async () => {
    const expected = mockData.npr;
    const result = await apiCalls.fetchArticles(mockDomain, mockPageNumber);

    expect(result).toEqual(expected)
  })

  it('throws an error if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve(mockData.npr),
      })
    );
    const expected = Error('Error: 500')
    const result = apiCalls.fetchArticles(mockDomain, mockPageNumber);

    expect(result).rejects.toEqual(expected)
  })

  it('throws an error if the fetch failed', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject('Fetch Failed')
    );
    const expected = Error('Fetch Failed')
    const result = apiCalls.fetchArticles(mockDomain, mockPageNumber);

    expect(result).rejects.toEqual(expected)
  })
})