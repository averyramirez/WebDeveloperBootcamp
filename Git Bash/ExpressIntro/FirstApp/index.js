const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!")
//     res.send("Hello, this is a response to your request!")
// })

app.get('/', (req, res) => {
    res.send("Homepage")
})

app.get('/cats', (req, res) => {
    res.send("Meow")
})

app.get('/dogs', (req, res) => {
    res.send("Woof")
})

// /cats => "meow"
// /dogs => "woof"
// '/'

app.listen(8080, () => {
    console.log("Listening on port 8080")
})