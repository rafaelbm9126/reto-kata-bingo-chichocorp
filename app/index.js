const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
    res.end('Hola');
});

app.listen(8080, () => {
    console.log('Server is Running');
});
