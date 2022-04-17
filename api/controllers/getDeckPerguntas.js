module.exports = () => {

    const deckPerguntasDB = require('../data/deck_perguntas.json');

    const controller = {};

    controller.listDeckPerguntas = (req, res) => res.status(200).json(deckPerguntasDB);

    return controller;


}