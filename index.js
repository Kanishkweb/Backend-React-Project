const main = require("./db");
// Express Server Setup
const express = require('express')
const app = express()
const port = 8000

// EndPoints

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// Calling the mongoDB database connection
main().catch(err => console.log(err));