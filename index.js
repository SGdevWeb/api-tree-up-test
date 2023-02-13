const express = require('express')
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

const app = express()

const port = 3001

app.use(express.json());

// Base de donnée
const dataBase = "mongodb+srv://samuelGustin:030687@cluster0.culccw8.mongodb.net/treeUpTest?retryWrites=true&w=majority"

mongoose.set('strictQuery', false)

mongoose.connect(dataBase,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.post('/', userRoutes)

app.listen(port, ()=>{
    console.log('serveur run on port '+port);
});