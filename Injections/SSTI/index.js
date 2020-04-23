const express = require('express')
const app = express()
const port = 3000
const bodyParser= require('body-parser')
var pug = require('pug')

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')


app.get('/',  (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.post('/',  (req, res) => {
  var templ = `p We will add following email to our database: ${req.body.email}`
  res.send(pug.render(templ))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
