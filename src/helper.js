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
  const badWords = ['the', 'of', 'to', 'in', 'a', 'and', 'for', 'on', 'with', 'new', 'at', 'is', 'his', 'man', 'as', '-', '_', '—', 'you', 'that', 'into', 'about', 'over', 'an', 'are', 'after', 'be', 'from', 'it', 'one', 'her', 'who', 'the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'I', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part']
  badWords.forEach(badWord => {
    arr.forEach(word => {
      if (word === badWord) {
        arr.splice(arr.indexOf(word), 1)
      }
    })
  })
  return arr;
}