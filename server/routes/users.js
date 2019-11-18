const router = require('express').Router();
const createResponse = require('../helpers/createResponse');
const User = require('../models/User');

router.get(
  '',
  createResponse((req, respond) =>
    User.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: req.query.limit || 20,
      },
      respond
    )
  )
);

router.get(
  '/:id',
  createResponse((req, respond) => User.findOneById(req.params.id, respond))
);

module.exports = router;
