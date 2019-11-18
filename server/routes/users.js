const router = require('express').Router();
const User = require('../models/User');
const { createAndSaveAuthTokens } = require('../helpers/tokens');

/**
 * @typedef UserCreationData
 * @property {string} email
 * @property {string} password
 */

/**
 * @route POST /users
 * @group Users
 * @param {UserCreationData.model} .body.required - User registration data
 * @returns {User.model} 200 - Created User
 */
router.post('/', (req, res, next) => {
  User.create({
    firstName: req.body.firstName,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => createAndSaveAuthTokens(user, req))
    .then((tokenData) => res.json(tokenData))
    .catch(next);
});

module.exports = router;
