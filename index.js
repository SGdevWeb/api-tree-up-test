const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express()

const port = 3001

app.use(express.json());

// Base de donnée
const dataBase = process.env.DATABASE

mongoose.set('strictQuery', false)

mongoose.connect(dataBase,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/', userRoutes)
app.get ('/api/user/:name', function (req, res) {
    console.log(req.params)
    res.send ("Hello " + req.params.name);  
});

app.listen(port, ()=>{
    console.log('serveur run on port '+port);
});