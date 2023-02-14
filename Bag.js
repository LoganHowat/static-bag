class Bag {
    static maxweight = 30;
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        }else if (weight>Bag.maxweight){
            throw new Error('Bag too heavy')
        }
        this.weight = weight
    }
}

module.exports = Bag