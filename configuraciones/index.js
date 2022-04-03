require('dotenv').config()

const env = {
  env: process.env.ENV_RUN,
  port: process.env.PORT || process.env.APP_PORT,
  secretKey: process.env.SECRET_KEY,
  tokenExpirationTime: process.env.TOKEN_EXPIRATION_TIME,
  minPasswordLength: process.env.MIN_PASSWORD_LENGTH,
  fakeUrlDB: process.env.FAKE_URL_DB
}

module.exports = env