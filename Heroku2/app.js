
const port = process.env.PORT || 3000

const express = require('express')


const app = express()

const mapbax_token = process.env.MAPBOX_TOKEN || 'pk.eyJ1IjoiYWJlcm1lYSIsImEiOiJjazFpbHU3ZG0wNHBkM25xN2YxcHhvbDkzIn0.fdLNntVLgdoDuW5f6uSFsw'

const weather_token = process.env.DARK_SKY_SECRET_KEY || '9bb95c5190098c9e453124f291b905a9'

app.get('/', function(req, res) {
    res.send({ 
      greeting: mapbax_token
    })
  })

  app.get('*', function(req, res) {
    res.send({
      error: 'Ruta no valida'
    })
  })

app.listen(port, function() {
  console.log('Up and running!')
})
  



