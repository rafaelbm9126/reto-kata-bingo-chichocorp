const ValidateCardBingo = (
    gameStateAct,
    cardBingo,
) => {
    let isntWin = [];
    const keysCard = Object.keys(cardBingo);
    keysCard.map((item_key, index_key) => {
        const column = cardBingo[item_key];
        for (let x=0; x<column.length; x++) {
            if (gameStateAct.indexOf(column[x]) === -1 && item_key !== 'N' && index_key === 2) {
                isntWin.push(true);
            }
        }
    });
    return isntWin.length === 0;
};

module.exports = { ValidateCardBingo };
