const { GenerateUniqueItem } = require('./GenerateUniqueItem');

test('diferent item', () => {
    let array = [];
    for (let x=0; x<15; x++) {
        array.push(GenerateUniqueItem(array, 1, 75));
    }
    const isRepeat = array.filter((item, index) => array.indexOf(item) != index)
    expect(isRepeat.length).toBe(0);
});
