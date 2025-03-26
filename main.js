const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Siamo nella rotta Principale');
    res.send('Server del mio blog');
});


app.listen(port, () => {
    console.log('Serve attivo in port: ' + port);
});