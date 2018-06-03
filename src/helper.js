export const makeWordsArr = (arr) => {
  const words = arr.reduce((acc, article) => {
    if (article.description) {
      const title = article.title.split(' ')
      const description = article.description.split(' ')
      acc.push(...title, ...description)
    } else {
      const title = article.title.split(' ')
      acc.push(...title)
    }
    return acc;
  }, [])
  return words;
}

export const countWords = (arr) => {
  const countObj = arr.reduce((acc, word) => {
    const lowerWord = word.toLowerCase();
    if (!acc[lowerWord]) {
      acc[lowerWord] = 0
    }
    acc[lowerWord]++
    return acc;
  }, {})
  return countObj;
}

export const cleanWords = (arr) => {
  const commonWords = ['the', 'of', 'to', 'in', 'a', 'and', 'for', 'on', 'with', 'new', 'at', 'is', 'his', 'man', 'as', '-', '_', '—', 'you', 'that', 'into', 'about', 'over', 'an', 'are', 'after', 'be', 'from', 'it', 'one', 'her', 'who', 'the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'I', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'been', 'call', 'who', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', '--', '(ap)', 'says', 'news', 'went']
  commonWords.forEach(commonWord => {
    arr.forEach(word => {
      if (word === commonWord) {
        arr.splice(arr.indexOf(word), 1)
      }
    })
  })
  return arr;
}

export const cleanSource = (source) => {
  if(source === 'Npr.org') {
    return 'NPR'
  } else if (source === 'Theatlantic.com') {
    return 'The Atlantic'
  } else if (source === 'Ap.org') {
    return 'The Associated Press'
  } else if (source === 'C-span.org') {
    return 'C-SPAN'
  } else if (source === 'Cato.org') {
    return 'The Cato Institute'
  } else {
    return source
  }
}

export const createMatchObject = (keywords, articles) => ({
  keywords,
  articles,
  id: Date.now()
})

export const flattenArrays = (arr) => {
  return arr.reduce((acc, arr) => {
    return acc.concat(Array.isArray(arr) ? flattenArrays(arr) : arr);
  }, []);
}

export const cleanArticles = (articles) => {
  const cleanedArticles = articles.map(article => {
    let cleanedArticle = {}
    if (!article.source) {
      cleanedArticle.source = { name: 'Unable to find article source' }
    } else {
      cleanedArticle.source = article.source
    }
    if (!article.title) {
      cleanedArticle.title = 'Unable to find article title'
    } else {
      cleanedArticle.title = article.title
    }
    if (!article.description) {
      cleanedArticle.description = 'Unable to find article description'
    } else {
      cleanedArticle.description = article.description
    }
    if (!article.url) {
      cleanedArticle.url = 'Unable to find link to article'
    } else {
      cleanedArticle.url = article.url
    }
    if (!article.urlToImage) {
      cleanedArticle.urlToImage = 'Unable to find link to image'
    }
    else {
      cleanedArticle.urlToImage = article.urlToImage
    }
    return cleanedArticle
  })
  return cleanedArticles
} 