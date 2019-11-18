const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const crypto = require('crypto');

const encrypt = (data, encryptionHash) =>
  crypto.pbkdf2Sync(data, encryptionHash, 1, 128, 'sha1').toString('base64');

/**
 * @typedef User
 * @property {integer} id
 * @property {string} email
 * @property {integer} createdAt
 * @property {integer} updatedAt
 */
const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    encryptionHash: {
      type: String,
      select: false,
    },
    encryptedPassword: {
      type: String,
      select: false,
    },
    refreshToken: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

schema
  .virtual('password')
  .set(function setPassword(password) {
    this.plainPassword = password;
    this.encryptionHash = crypto.randomBytes(128).toString('base64');
    this.encryptedPassword = encrypt(password, this.encryptionHash);
  })
  .get(function getPassword() {
    return this.plainPassword;
  });

schema.methods.isEqualPassword = function(password) {
  return encrypt(password, this.encryptionHash) === this.encryptedPassword;
};

schema.methods.decreaseVacationDays = function(count) {
  const bonusesLeft = this.vacationBonusAvailable - count;

  if (bonusesLeft > 0) {
    this.vacationBonusAvailable = bonusesLeft;
    return;
  }

  this.vacationBonusAvailable = 0;
  this.vacationDaysAvailable += bonusesLeft;
};

schema.plugin(beautifyUnique);

module.exports = mongoose.model('User', schema);
