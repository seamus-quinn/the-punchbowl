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