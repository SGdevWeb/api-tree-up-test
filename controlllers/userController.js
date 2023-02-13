const bcrypt = require('bcrypt');

const User = require('../models/userModel');

exports.signin = (req, res, next) => {
    // Lorsque le corps de la requête est un objet vide
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: 'Saisie incorrecte' });
    }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur crée !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }))
};