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