module.exports = {
  SECRET_KEY: process.env.SECRET_KEY,
  FRONT_APP_URL: process.env.FRONT_APP_URL,
  AUTH_TOKEN_EXPIRATION_TIME: '30m',
  RESET_PASSWORD_TOKEN_EXPIRATION_TIME: '120m',
  EMAIL_FROM: `Robot <robot@${process.env.MAILGUN_DOMAIN}>`,
};
