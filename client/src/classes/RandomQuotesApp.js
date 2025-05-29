import RandomQuote from './RandomQuote.js'

class RandomQuotesApp {
  constructor() {
    this.quoteTextCont = document.querySelector('.quote-text')
    this.quoteAuthorCont = document.querySelector('.quote-author')
    this.quoteButton = document.querySelector('.generate-quote')
    this.currentQuote = null

    this.init()
  }

  async getRandomQuote() {
    try {
      const randomQuote = await RandomQuote.getRandomQuote()
      this.currentQuote = randomQuote
      console.log(this.currentQuote)
      const {text, author} = this.currentQuote
      this.quoteTextCont.textContent = text
      this.quoteAuthorCont.textContent = author
    }
    catch(error) {
      console.error('Mistake in getRandomQuote', error)
    }
  }

  init() {
    this.quoteButton.addEventListener('click', () => this.getRandomQuote())
  }
}

export default RandomQuotesApp