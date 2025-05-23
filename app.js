const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('7')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})

