require("dotenv").config();
const Cosmic = require("cosmicjs");

const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.COSMIC_BUCKET_SLUG,
  read_key: process.env.COSMIC_READ_KEY,
});

async function testConnection() {
  try {
    const data = await bucket.getObjects();
    console.log("Connection successful!");
    console.log(data);
  } catch (error) {
    console.error("Connection error:", error);
  }
}

testConnection();
