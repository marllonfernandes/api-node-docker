const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const User = require('./db/connection').User

const allowCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*") // colocar os dominios permitidos | ex: 127.0.0.1:3000
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, X-Access-Token, X-Key")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH")
    res.header("Access-Control-Allow-Credentials", "true")
    next()
}

app.use(allowCors)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.route('/api/users')
    .get(async(req, res) => {
        res.json(await User.find({}).exec())
    })
    .post(async(req, res) => {
        res.json(await User.insertMany(req.body))
    })

app.route('/api/users/:_id')
    .put(async(req, res) => {
        res.json(await User.findOneAndUpdate({ _id: req.params._id }, req.body).exec())
    })
    .delete(async(req, res) => {
        res.json(await User.deleteOne({ _id: req.params._id }))
    })

app.use((req, res, next) => {
    res.status(404).json({ message: "Sorry, that route doesn't exist. Have a nice day!" })
})

app.listen(process.env.SERVER_PORT || 3000, process.env.SERVER_HOST, () => {
    console.log(`Example app listening at http://localhost:${process.env.SERVER_PORT || 3000}`)
})