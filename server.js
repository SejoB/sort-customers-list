require('dotenv').config()
const path = require('path')

const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.resolve('./client/build')))

const host = process.env.API_HOST
const port = process.env.API_PORT

app.get('/api/',(req, res) => {
    res.status(200).send('Express REST api available!!')
})
app.get('*',  (req, res) => {
    res.status(200).sendFile(path.resolve('./client/build','index.html'))
})

app.listen(3030,  ()=> {
    console.log(`server is alive  ✨ ⚡ http://${host}:${port} ✨ ⚡`)
})