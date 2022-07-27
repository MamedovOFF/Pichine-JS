
const express = require('express')
const app = express()
const users = require('../../models/user')
const port = 3000


app.get('/',async (req, res) => {
    res.send('Hello World!')
})

app.get('/menu', (req, res) => {
    res.send('Menu!')
})
app.post('/order', (req, res) => {
    res.send('Menu!')
})
app.put('/order/:id', (req, res) => {
    res.send('Menu!')
})
app.delete('/order/:id', (req, res) => {
    res.send('Menu!')
})
app.get('/order', (req, res) => {
    res.send('ORDER!')
})
app.post('/waiter', (req, res) => {
    res.send('ORDER!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
