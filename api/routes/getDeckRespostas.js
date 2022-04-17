module.exports = app => {
    const controller = require('../controllers/getDeckRespostas')();

    app.route('/api/v1/getDeckRespostas').get(controller.listDeckRespostas)

}