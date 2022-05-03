const http = require('http'); // requiring a codre module that comes in node

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express'); // imports the Expres module using require
const app = express(); // calls the express function and stores the result in the app variable

const server = http.createServer(app); // creates an HTTP server usign our Express app 
const database = require('./app.js');

app.get('/', (req, res) => {
    res.send(`<div>
                <ul> 
                <li><a href="/albums/0">The Carter</li> 
                <li><a href="/albums/0">Free Weezy</li> 
                </ul>
                </div>`);
}); 
app.get('/cd', (req, res) => {

    res.send(`CD Playlist`);
}); 

app.get('/albums/:song', (req, res) => { 

    const song = req.params.song;
    
    if (song) {
            let htmlData = ``
            htmlData +=`<h1>${database[song].name}<h1>
            <h2>${database[song].publishDate}<h2>
            <h3>${database[song].description}<h2>
            <img src="${database[song].imgURL}" alt=" " width="500" height="500">`
            res.send(htmlData);
        song++;
        } else {
           res.status(404)
           res.send(`no album with the name ${song}`)
    }

});

// app.get('/albums/:number', (req, res) => {
//     const {number} = req.params;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});