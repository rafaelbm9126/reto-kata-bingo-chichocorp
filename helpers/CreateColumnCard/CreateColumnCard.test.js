const { CreateColumnCard } = require('./CreateColumnCard');

test('check array items', () => {
    const array = CreateColumnCard(1,9).filter((val) => val > 9 || val < 1);
    expect(array.length).toBe(0);
});
