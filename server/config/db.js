const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.DB || 'mongodb://localhost/app-name', {
    useNewUrlParser: true,
  });
};
