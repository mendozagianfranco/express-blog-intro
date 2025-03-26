const express = require('express');
const post = require('./data/posts.js');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Siamo nella rotta Principale');
    res.send('Server del mio blog');
});


app.get('/bacheca', (req, res) => {
    console.log('Siamo nella rotta Bacheca');
    res.json(post);
});

app.listen(port, () => {
    console.log('Serve attivo in port: ' + port);
});