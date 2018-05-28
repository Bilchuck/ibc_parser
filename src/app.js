const express = require('express')
var cors = require('cors')
const mizhbankController = require('./controllers/mizhbankController')
const app = express()

app.use(cors())
const PORT = process.env.PORT || 3000

app.get('/mizhbank', mizhbankController)

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT} port!`)
})
