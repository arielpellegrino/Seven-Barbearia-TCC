const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento.js');

router.post('/', async(req , res) => {

    try {
        const agendamento = await new Agendamento(req.body).save();
        res.json({agendamento});

    } catch (err) {
        res.json({ error: true, message: err.message})
    }

});

module.exports = router;