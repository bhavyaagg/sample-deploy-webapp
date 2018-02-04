const PORT = process.env.PORT || 4000;

const DATABASE_URL = process.env.DATABASE_URL ||
  "postgres://testuser:testpass@localhost:5432/testdb"

exports = module.exports = {PORT, DATABASE_URL}