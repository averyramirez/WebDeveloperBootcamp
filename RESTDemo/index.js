const { text } = require('express');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set(' view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        username: 'Skyler',
        comment: 'I like to go bird watching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Okay, here are your ${qty} ${meat} tacos!`)
})

app.listen(3000, () => {
    console.log("On Port 3000!")
})






// GET /comments - list all comments
// POST /comments - create a new comments
// GET /comments/:id - get one comment using ID
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - remove one comment

