const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()

const sendMail = require('./mail')


const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use('/api/sendmail', sendMail)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

 // serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')))
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'./','frontend','build','index.html')))
} else {
  app.get('/', (req,res) => {
      res.send('Please Set To Production')
  })
}
