import * as apiCalls from './apiCalls';
import apiKey from './apiKey';
import * as helper from './helper'

describe('fetchArticles', () => {
  let mockDomain;
  let mockPageNumber;
  let mockUrl;
  let mockData;

  beforeEach(() => {
    mockDomain = 'wow.com';
    mockPageNumber = 1;
    mockData = [
      {
        article: 'wow'
      }
    ]
    mockUrl = `https://newsapi.org/v2/everything?domains=${mockDomain}&apiKey=${apiKey}&page=${mockPageNumber}`;
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData),
      })
    );
    helper.cleanArticles = jest.fn().mockImplementation(() => mockData)
  })

  it('calls fetch with the correct arguments', async () => {

    await apiCalls.fetchArticles(mockDomain, mockPageNumber);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  })

  it('returns the correct data', async () => {
    const expected = mockData
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