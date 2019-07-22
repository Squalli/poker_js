class Evaluator{
    constructor(){
        this.values = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
        this.colors = ["S","H","D","C"]
        
    }
    evaluate(table, hands){

        this.patterns = []
        var evaluator = this
        
        Object.keys(hands).forEach(function(key){
            var cards = table.concat(hands[key])
            console.log(cards)
            evaluator.patterns.push({ key: evaluator.searchPairs(cards)})
        })
         
    }

    searchPairs(cards){
        var cardsValues = [], paires = 0, brelans = 0

        cards.forEach(element => {
            cardsValues.push(element.value)
        })
        var patterns = []
        this.values.forEach(function(val, index){
            const result = cardsValues.filter(card => card == val);
            if(result.length == 4){
                patterns.push("carré de "+val)
            }
            else if(result.length == 3){
                patterns.push("brelan de "+val)
                brelans++
            }
            else if(result.length == 2){
                patterns.push("paire de "+val)
                paires++
            }
        })
        
        if(paires >= 1 && brelans >= 1){
            patterns = ["Full House"]
        }
        return patterns
    }

    getPatterns(){
        return this.patterns
    }
}

module.exports = new Evaluator()