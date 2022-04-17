module.exports = app => {
    const controller = require('../controllers/getDeckPerguntas')();

    app.route('/api/v1/getDeckPerguntas').get(controller.listDeckPerguntas)

}