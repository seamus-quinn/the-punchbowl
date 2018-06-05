import apiKey from './apiKey'
import * as helper from './helper'

export const fetchArticles = async (domain, pageNumber) => {
  const url = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${apiKey}&page=${pageNumber}`
  try {
    const response = await fetch(url)
    if (response.status === 200) {
      const data = await response.json();
      const cleanedData = helper.cleanArticles(data.articles)
      return cleanedData
    } else {
      throw Error(response.status)
    }
  } catch (error) {
    throw Error(error)
  }
}