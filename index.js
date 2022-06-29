const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 5000

const mongose = require('mongoose')
mongoose.connect('mongodb+srv://KimHyejin:bubbler0217@cluster0.b6dba.mongodb.net/?retryWrites=true&w=majority',{})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 이야 된다')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})