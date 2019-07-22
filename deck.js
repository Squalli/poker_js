class Card{
  constructor(value, color){
    this.value = value
    this.color = color
    this.name = this.value+this.color
  }
}

class Deck {
  constructor() {
    this.initDeck()
    this.dealtCards = []
  }
  
  initDeck(){
    
    let deck = []
    let values = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
    let colors = ["S","H","D","C"]

    colors.forEach(function(color){
       values.forEach(function(value){

         deck.push(new Card(value,color))
       })
    })
    this.deck = deck
  }

  shuffleCards() {
    var currentIndex = this.deck.length
    var temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = this.deck[currentIndex]
      this.deck[currentIndex] = this.deck[randomIndex]
      this.deck[randomIndex] = temporaryValue
    }
    return this.deck
  }
  
  getCard(){
    var card = this.deck[0]
    this.deck.shift()
    return card
  }
  
  dealCard(cards){
    if(cards){
      for(var card in cards){
        this.dealtCards.push(card)
      }
    }
    else{
      this.dealtCards.push(this.getCard())
    }
  }
  
  giveCards(nbOfCards){
    var cards = []
    for(var i = 0; i < nbOfCards; i++){
      cards.push(this.getCard())
    }
    if(cards.length == 1){
      return cards[0]
    }
    return cards
  }
  
  getDeck(){
    return this.deck
  }
  
  getDealt(){
    return this.dealtCards
  }
  
}

module.exports = Deck
