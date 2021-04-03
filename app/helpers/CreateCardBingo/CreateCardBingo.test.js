const { CreateCardBingo } = require('./CreateCardBingo');

test('check object card', () => {
    const object = Object.keys(CreateCardBingo());
    expect(object.length).toBe(5);
});
