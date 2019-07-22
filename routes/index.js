var express = require('express')
var router = express.Router()

var Deck = require('../deck')
var Players = require('../players')
var Evaluator = require('../evaluate')

var table = [], deck, players
var turn = "flop"

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(table.length == 0){
    deck = new Deck()
    players = new Players()
    
    deck.shuffleCards()
    players.donne(deck)
  }

  res.render('index', { title: 'Poker Express', players: players.players, turn : turn, table: table, deck : deck })
})

router.get('/turn', function(req, res, next) {
 if(turn == "flop"){
    deck.dealCard()//carte brulée
    table = deck.giveCards(3)
    turn = "turn"
  }
  else{
    deck.dealCard()//carte brulée
    table = table.concat(deck.giveCards(1))
    turn = (turn == "turn") ? "river" : ""
  }

  Evaluator.evaluate(table, players.players)

  res.render('index', { 
    title: 'Poker Express', 
    players: players.players, 
    turn : turn, 
    table: table, 
    deck : deck,
    patterns : Evaluator.getPatterns()
  })
})

router.get('/reset', function(req, res, next){
  table = []
  turn = "flop"
  res.redirect('/')
})

router.get('/fold/:player', function(req, res, next){
  players.fold(req.params.player, deck)
  res.redirect("/")
  
})
 
module.exports = router