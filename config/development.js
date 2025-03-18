module.exports = {
    port: 5000,
    database: "your_database_url",
    secret: "your_secret_key",
    COSMIC_BUCKET: process.env.COSMIC_BUCKET,
    COSMIC_READ_KEY: process.env.COSMIC_READ_KEY,
    COSMIC_WRITE_KEY: process.env.COSMIC_WRITE_KEY,
    SENDGRID_FUNCTION_ENDPOINT: process.env.SENDGRID_FUNCTION_ENDPOINT
  };