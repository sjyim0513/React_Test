const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sjyim0513:ysj10301@cluster0.ntfj3m4.mongodb.net/?retryWrites=true&w=majority', {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('NongoDZB good')).catch(err => console.log('err'))

app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))