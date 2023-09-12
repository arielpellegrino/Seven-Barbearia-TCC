const express = require('express');
const router = express.Router();
const Servico = require('../models/servico.js');

router.post('/', async(req , res) => {

    try {
        const servico = await new Servico(req.body).save();
        res.json({servico});

    } catch (err) {
        res.json({ error: true, message: err.message})
    }

});

module.exports = router;