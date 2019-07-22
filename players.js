
class Players {
  constructor() {
    this.players = {Bobby : [], Peter : [], Jimmy : []}
  }
  
  giveCardToPlayer(player, card){
    this.players[player].push(card)
  }
  
  getPlayerHand(player){
    return this.players[player]
  }
  
  donne(deck){
    const Players = this
    for(var i = 0; i < 2; i++){
      Object.keys(Players.players).map(function(key, index) {
        Players.giveCardToPlayer(key, deck.giveCards(1))
      });
    }
  }
  
  fold(player, deck){
    deck.dealCard(this.players[player])
    this.players[player] = []
  }
}

module.exports = Players
