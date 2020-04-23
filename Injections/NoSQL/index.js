const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect("mongodb://127.0.0.1:27017/",{useUnifiedTopology: true}, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  const db = client.db('test1')
  const dbUsers = db.collection("users")

  app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
  })

app.post('/', (req, res) => {
  console.log('POST received!')
  dbUsers.findOne({uname: req.body.username, passwd: req.body.password},  (err, result) => {
                if (err) {
                        return res.send('Sorry there was an error!')
                }

                if (!result) {
                        return res.sendFile(__dirname + "/noaccess.html")
                }

                return res.sendFile(__dirname + "/authorized.html")
        })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
})
