const { ValidateCardBingo } = require('./ValidateCardBingo');

const gameStateAct = [
    23,  73, 39, 21, 52, 16, 70,  1,
    50, 22, 58, 37, 15, 64, 71, 55,
    30, 38, 69, 59, 36, 3,  5,  11,
    34
];

const cardBingo = {
    'B': [ 15, 3, 5, 11, 1 ],
    'I': [ 23, 22, 16, 21, 30 ],
    'N': [ 37, 34, 10, 39, 38 ],
    'G': [ 59, 58, 52, 50, 55 ],
    'O': [ 64, 69, 70, 73, 71 ]
};

test('vadidate if win', () => {
    expect(ValidateCardBingo(
        gameStateAct,
        cardBingo,
    )).toBe(true);
});
