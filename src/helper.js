export const makeWordsArr = (arr) => {
  const words = arr.reduce((acc, article) => {
    const title = article.title.split(' ')
    const description = article.description.split(' ')
    acc.push(...title, ...description)
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
  const badWords = ['the', 'of', 'to', 'in', 'a', 'and', 'for', 'on', 'with', 'new', 'at', 'is', 'his', 'man', 'as', '-', '_', '—', 'you', 'that', 'into', 'about', 'over', 'an', 'are', 'after', 'be', 'from']
  badWords.forEach(badWord => {
    arr.forEach(word => {
      if (word === badWord) {
        arr.splice(arr.indexOf(word), 1)
      }
    })
  })
  return arr;
}