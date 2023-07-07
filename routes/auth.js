const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', (req,res)=> {  // Create a user using the POST "/api/auth". Doesn't requrie auth
    // res.send('Hello Kanishk')
    const user = User(req.body);
    user.save()
    console.log(req.body)
    res.send(req.body)
})

module.exports = router