const Express = require('express');
const { CreateCardBingo } = require('./helpers/CreateCardBingo');
const { GenerateUniqueItem } = require('./helpers/GenerateUniqueItem');
const { ValidateCardBingo } = require('./helpers/ValidateCardBingo');

const app = Express();
let card = {};
let gameStatus = [];
let isWinner = false;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/get_card', (req, res) => {
    card = CreateCardBingo();
    res.redirect('/start_game');
});

app.get('/start_game', (req, res) => {
    if (Object.keys(card).length > 0) {
        res.render('game', { card, gameStatus, isWinner });
    } else {
        res.redirect('/');
    }
});

app.get('/next_value', (req, res) => {
    gameStatus.push(GenerateUniqueItem(gameStatus, 1, 75));
    res.redirect('/start_game');
});

app.get('/validate_winner', (req, res) => {
    isWinner = ValidateCardBingo(gameStatus, card);
    res.redirect('/start_game');
});

app.get('/finish_game', (req, res) => {
    card = {};
    gameStatus = [];
    isWinner = false;
    res.redirect('/');
});

app.listen(process.env.PORT, () => {
    console.log('Server is Running');
});
