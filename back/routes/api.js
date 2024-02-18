var express = require('express');
var router = express.Router();
var posteosmodels = require('../models/posteosmodels');

router.get('/posteos',async function (req,res,next){
    let blog = await posteosmodels.getPosteos();

    res.json(blog);
})

module.exports = router;