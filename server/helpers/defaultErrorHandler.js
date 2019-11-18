const { validationResult } = require('express-validator/check');

const toValidationErrors = (errors) =>
  Object.keys(errors).reduce((acc, key) => {
    const { path, kind, message } = errors[key];

    acc[path] = {
      key: kind,
      message,
    };
    return acc;
  }, {});

module.exports = (err, req, res, next) => {
  if (!err) {
    next();
  }

  console.error(err.errors || err.message);

  // Request validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({
      errors: errors.mapped(),
    });
    return;
  }

  // Mongoose validation errors
  if (err.errors) {
    res
      .status(err.status || 400)
      .json({ errors: toValidationErrors(err.errors) });
    return;
  }

  // Exceptions
  res.status(err.status || 500).json({ message: err.message });
};
