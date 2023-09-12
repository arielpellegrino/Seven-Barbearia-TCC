const express = require('express');
const router = express.Router();
const Auth = require('../models/auth.js');
const bcrypt = require('bcrypt');

router.post('/', async(req , res) => {

    try {
        const auth = await new Auth(req.body).save();
        res.json({auth});

    } catch (err) {
        res.json({ error: true, message: err.message})
    }

});

router.get('/', async (req, res) => {

  });
  

router.get('/login', async (req, res) => {
    try {
      const { email, senha } = req.query;
  
      // Consulte o banco de dados para encontrar o registro com o email especificado
      const usuario = await Auth.findOne({ where: { email } });
  
      if (!usuario) {
        return res.json({ error: true, message: 'Email não encontrado' });
      }
  
      // Compare a senha fornecida com a senha armazenada no banco de dados
      const senhaCorrespondente = await bcrypt.compare(senha, usuario.senha);
  
      if (!senhaCorrespondente) {
        return res.json({ error: true, message: 'Senha incorreta' });
      }
  
      // Se a autenticação for bem-sucedida, você pode fazer outras ações aqui
      // Por exemplo, gerar um token de autenticação e responder com ele
  
      res.json({ success: true, message: 'Autenticação bem-sucedida' });
    } catch (err) {
      res.status(500).json({ error: true, message: err.message });
    }
  });

module.exports = router;