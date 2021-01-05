const express = require('express')
const app =  express();
const morgan = require('morgan')


app.use(morgan('tiny'))


app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})


app.use('/dogs', (req, res, next) => {
    console.log("I love dogs!")
    next();
}

app.use((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
      next();   
    }
   res.send('Sorry, password needed!')
})



// app.use((req, res, next) => {
//     console.log("This is my first middleware!")
//     return next();
//     console.log("This is my first middleware - after calling next()")
// })
// app.use((req, res, next) => {
//     console.log("This is my second middleware!")
//     return next();
// })
// app.use((req, res, next) => {
//     console.log("This is my third middleware!")
//     return next();
// })



// app.get('/', (req, res) => {
//         console.log(`REQUEST DATE: ${req.requestTime}`);
//         res.send('Home page!');
// })

// app.get('/dogs', (req, res) => {
//     console.log(`REQUEST DATE: ${req.requestTime}`)
//     res.send('Woof woof!')
// })

// app.use((req, res) => {
//     res.send('Not found!')
// })

app.listen(3000, () => {
    console.log('App is running on localhost:3000!')
})