// import quotes from '../data/quotes.js'
// import MathUtils from '../utils/MathUtils.js'
import Quote from './Quote.js'

class RandomQuote {
  static async getRandomQuote() {
  try {
    const response = await fetch('http://localhost:3000/quotes/random')
    if (!response.ok) throw new Error(`Ошибка API: ${response.status}`)

    const data = await response.json()
    if (!data?.id || !data?.quote || !data?.author) {
      throw new Error("Некорректные данные цитаты");
    }

    return new Quote(data.id, data.quote, data.author)
  }
  catch(error) {
    console.error('Mistake in RandomQuote', error)
    throw error
  }
  }
}

export default RandomQuote
