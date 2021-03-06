const express = require('express')
// 解析器
const bodyParser = require('body-parser')
// 跨來源資源共享（Cross-Origin Resource Sharing (CORS)）
const cors = require('cors')
// 連線存取紀錄
const morgan = require('morgan')

const app = express()

// 連線存取紀錄
app.use(morgan('combined'))
// 解析器
app.use(bodyParser.json())
// 跨來源資源共享（Cross-Origin Resource Sharing (CORS)）
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

app.listen(process.env.PORT || 8081)
