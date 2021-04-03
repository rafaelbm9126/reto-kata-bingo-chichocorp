const CreateColumnCard = (
    minBound,
    maxBound,
    maxLengPerColumn = 5
) => {
    let column = [];

    do {
        const item = Math.floor(Math.random() * (maxBound - minBound + 1)) + minBound;
        if (column.indexOf(item) === -1) {
            column.push(item);
        }
    } while(column.length < maxLengPerColumn);

    return column;
}

module.exports = { CreateColumnCard };
