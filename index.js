const express = require('express')
const app = express()
const port = 3000
const route = require('./router.js')

app.use(route)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})