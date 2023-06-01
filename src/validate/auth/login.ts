import { Request, Response } from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import  User  from '../../models/User';

const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

async function authLogin(req: Request, res: Response) {
  const { email, password } = req.body;
  const validationResult = schema.validate({ email, password });

  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error.details[0].message });
  }

  // Verifique se o usuário com o email fornecido existe no banco de dados
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: 'Usuário não encontrado' });
  }

  // Verifique se a senha fornecida coincide com a senha armazenada no banco de dados
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Senha incorreta' });
  }

  // Gere um token JWT para autenticação
  const secret = 'sua_chave_secreta_aqui';
  const payload = { userId: user._id }; // Substitua com o payload desejado

  const token = jwt.sign(payload, secret);

  res.status(200).json({ token });
}

export default authLogin;
