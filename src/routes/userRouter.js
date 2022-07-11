const router = require('express').Router();
const {
    create,
    getAll
} = require('../controllers/userController');
const route = (app) => {
    router.route('/').post(create).get(getAll);
    return app.use('/user', router);
}

module.exports = route;