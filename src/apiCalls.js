import apiKey from './apiKey'

export const fetchArticles = async (domain, pageNumber) => {
  const url = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${apiKey}&page=${pageNumber}`
  try {
    const response = await fetch(url)
    if (response.status === 200) {
      const data = await response.json();
      return data
    } else {
      throw Error(response.status)
    }
  } catch (error) {
    throw Error(error)
  }
}