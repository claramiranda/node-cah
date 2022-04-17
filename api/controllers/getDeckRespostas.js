module.exports = () => {

    const deckRespostasDB = require('../data/deck_respostas.json');

    const controller = {};

    controller.listDeckRespostas = (req, res) => res.status(200).json(deckRespostasDB);

    return controller;


}