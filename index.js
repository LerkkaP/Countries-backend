const PORT = process.env.PORT || 3001

const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()
 
const app = express()

app.use(cors())
app.use(express.static('build'))

app.get('/weather', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=spain&appid=${process.env.REACT_APP_API_KEY}`
    )
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' })
  }
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})