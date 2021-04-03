const { CreateColumnCard } = require('../CreateColumnCard');

const CreateCardBingo = () => {
    return ({
        'B': CreateColumnCard(1, 15),
        'I': CreateColumnCard(16, 30),
        'N': CreateColumnCard(31, 45),
        'G': CreateColumnCard(46, 60),
        'O': CreateColumnCard(61, 75),
    });
}

module.exports = { CreateCardBingo };
