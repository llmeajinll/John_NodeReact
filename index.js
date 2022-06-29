const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const config = require('./config/key')
const {User} = require("./models/User")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongose = require('mongoose')
mongoose.connect(config.monogoURI,{})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 자야되는디')
})

app.post('/register', (req,res)=>{
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.


  const user = new User(req.body)
  user.save((err, doc)=>{
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})