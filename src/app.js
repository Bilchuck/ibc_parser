const express = require('express')
const mizhbankController = require('./controllers/mizhbankController')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/mizhbank', mizhbankController)

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT} port!`)
})
