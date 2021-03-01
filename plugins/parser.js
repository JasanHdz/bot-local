import { database } from './database.js'

class Parser {
  #database
  constructor() {
    this.#database = database
  }
  #containts(target, pattern) {
    let value = 0
    pattern.forEach(word => {
      value = value + target.includes(word)
    })
    return (value === 1)
  }

  #removeAccents(str)  {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

  #getIndexMessage(str) {
    const message = this.#removeAccents(str)
    const BreakException = {};
    let position = -1
    try {
      this.#database.forEach(({ keywords }, idx) => {
        if (this.#containts(message.toLowerCase(), keywords)) {
          position = idx
          throw BreakException
        }
      })
    } catch (e) {
      if (e !== BreakException) throw e;
    }
    return position
  }

  #randomNumber(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  #setIndexMessage(index) {
    const size = this.#database[index].response.length - 1
    if (this.#database[index].index === size) {
      this.#database[index].index = 0
    } else {
      this.#database[index].index = (this.#database[index].index || 0) + 1
    }
    console.log(this.#database[index])
  }

  getResponseMessage(message) {
    const index = this.#getIndexMessage(message)
    if (index >= 0) {
      if (this.#database[index].sorted) {
        const responseIndex = this.#database[index].index || 0
        this.#setIndexMessage(index)
        return this.#database[index].response[responseIndex]
      }
      const randomNumber = this.#randomNumber(this.#database[index].response.length);
      return this.#database[index].response[randomNumber]
    } else {
      return "Disculpá, creo que no te entendí"
    }
  }
}

export default Parser