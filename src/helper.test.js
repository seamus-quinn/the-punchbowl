import * as helper from './helper'
import { nyTimes } from './mockData';

describe('makeWordsArr', () => {
  it ('returns an array of words, when passed an array of objects', () => {
    const expected = ["Billy", "Cannon,", "Football", "Hero", "With", "a", "Troubled", "Life,", "Dies", "at", "80", "-", "New", "York", "Times", "New", "York", "Times", "Billy", "Cannon,", "Football", "Hero", "With", "a", "Troubled", "Life,", "Dies", "at", "80", "New", "York", "Times", "Billy", "Cannon,", "a", "charismatic", "college", "and", "professional", "football", "hero", "whose", "world", "came", "crashing", "down", "when", "he", "went", "to", "prison", "for", "counterfeiting,", "died", "on", "Friday", "at", "his", "home", "…"];

    const mockArticles = [
      {
        "source": {
          "id": "the-new-york-times",
          "name": "The New York Times"
        },
        "author": "http://www.nytimes.com/by/frank-litsky",
        "title": "Billy Cannon, Football Hero With a Troubled Life, Dies at 80 - New York Times",
        "description": "New York Times Billy Cannon, Football Hero With a Troubled Life, Dies at 80 New York Times Billy Cannon, a charismatic college and professional football hero whose world came crashing down when he went to prison for counterfeiting, died on Friday at his home …",
        "url": "https://www.nytimes.com/2018/05/20/obituaries/billy-cannon-dead-football-heisman.html",
        "urlToImage": "https://static01.nyt.com/images/2018/05/21/sports/21cannon1/21cannon1-facebookJumbo.jpg",
        "publishedAt": "2018-05-21T03:08:10Z"
      }
    ]
    const result = helper.makeWordsArr(mockArticles)
    
    expect(result).toEqual(expected)
  })

  it('returns an array of words if article description is not present', () => {
    const expected = ["Billy", "Cannon,", "Football", "Hero", "With", "a", "Troubled", "Life,", "Dies", "at", "80", "-", "New", "York", "Times"];

    const mockArticles = [
      {
        "source": {
          "id": "the-new-york-times",
          "name": "The New York Times"
        },
        "author": "http://www.nytimes.com/by/frank-litsky",
        "title": "Billy Cannon, Football Hero With a Troubled Life, Dies at 80 - New York Times",
        "url": "https://www.nytimes.com/2018/05/20/obituaries/billy-cannon-dead-football-heisman.html",
        "urlToImage": "https://static01.nyt.com/images/2018/05/21/sports/21cannon1/21cannon1-facebookJumbo.jpg",
        "publishedAt": "2018-05-21T03:08:10Z"
      }
    ]

    const result = helper.makeWordsArr(mockArticles);

    expect(result).toEqual(expected)
  })
})

describe('countWords', () => {

  it('returns an object with keys of words, and values that are the number of times that is present in the array passed to it', () => {
    const mockWords = ['garbage', 'sushi', 'wow', 'much', 'sushi', 'lol', 'what', 'wow', 'crazy', 'muffins', 'bonsai', 'what']

    const expected = {
      garbage: 1,
      sushi: 2,
      wow: 2,
      much: 1,
      lol: 1,
      what: 2,
      crazy: 1,
      muffins: 1,
      bonsai: 1
    }

    const result = helper.countWords(mockWords)

    expect(result).toEqual(expected)
  })

  it('is returns an object with lowercase keys', () => {
    const mockWords = ['Garbage', 'sushi', 'wow', 'much', 'sushi', 'lol', 'what', 'wow', 'crazy', 'Muffins', 'bonSai', 'What']

    const expected = {
      garbage: 1,
      sushi: 2,
      wow: 2,
      much: 1,
      lol: 1,
      what: 2,
      crazy: 1,
      muffins: 1,
      bonsai: 1
    }

    const result = helper.countWords(mockWords)

    expect(result).toEqual(expected)
  })
})

describe('cleanWords', () => {

  it('returns a cleaned array without common words', () => {
    const mockWords = ['the', 'garbage', 'people', 'went', 'out', 'to', 'eat', 'at', 'a', 'dumpster', 'called', 'applebees']
    const expected = ['garbage', 'eat', 'dumpster', 'called', 'applebees']
    const result = helper.cleanWords(mockWords);

    expect(result).toEqual(expected)
  })
})

describe('cleanSource', () => {

  it('returns NPR when passed Npr.org', () => {
    const expected = 'NPR'
    const result = helper.cleanSource('Npr.org');

    expect(result).toEqual(expected)
  })

  it('returns The Atlantic when passed Theatlantic.com', () => {
    const expected = 'The Atlantic'
    const result = helper.cleanSource('Theatlantic.com');

    expect(result).toEqual(expected)
  })

  it('returns The Associated Press when passed Ap.org', () => {
    const expected = 'The Associated Press'
    const result = helper.cleanSource('Ap.org');

    expect(result).toEqual(expected)
  })

  it('returns C-SPAN when passed C-span.org', () => {
    const expected = 'C-SPAN'
    const result = helper.cleanSource('C-span.org');

    expect(result).toEqual(expected)
  })

  it('returns The Cato Institute when passed Cato.org', () => {
    const expected = 'The Cato Institute'
    const result = helper.cleanSource('Cato.org');

    expect(result).toEqual(expected)
  })

  it('returns the source if none of the conditions are met', () => {
    const expected = 'The New York Times';
    const result = helper.cleanSource('The New York Times');

    expect(result).toEqual(expected)
  })
})

describe('createMatchObject', () => {

  it('returns an object with keywords, articles and an id', () => {
    const mockKeywords = ['garbage', 'wow', 'sushi']
    const mockArticles = [
      {title: 'wow an article'}, 
      {title: 'holy cow another one'}
    ]
    Date.now = jest.fn().mockImplementation(() => 1)
    const expected = {
      keywords: mockKeywords,
      articles: mockArticles,
      id: 1
    }
    const result = helper.createMatchObject(mockKeywords, mockArticles)

    expect(result).toEqual(expected)
  })
})

describe ('flattenArrays', () => {

  it('returns an array when passed a nested arry', () => {
    const nestedArr = [['wow'], ['krampus'], ['is'], ['cool']]

    const result = helper.flattenArrays(nestedArr);

    const expected = ['wow', 'krampus', 'is', 'cool']

    expect(result).toEqual(expected);
  })
})

describe('cleanArticles', () => {
  
  it('returns an array of cleaned articles, ', () => {

  })

  it('sets the source.name to be: Unable to find article source if there is no source found for that article', () => {

  })

  it('does not change the source if the source is present', () => {

  })

  it('sets the title to be: Unable to find article title if there is no title found for that article', () => {

  })

  it('does not change the title if the title is present', () => {

  })

  it('sets the description to be: Unable to find article description if there is no description found for that article', () => {

  })

  it('does not change the description if the description is present', () => {

  })

  it('sets the url to be: Unable to find link to article if there is no url found for that article', () => {

  })

  it('does not change the url if there is a url present', () => {

  })

  it('sets the urlToImage to be: null if there is no urlToImage found for that article', () => {

  })

  it('does not change the urlToImage if there is one present', () => {

  })

})