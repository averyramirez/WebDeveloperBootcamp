const express = require('express');
const router = express.Router();

router.get('/shelters', (req, res) => {
    res.send("ALL SHELTERS")
})