import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import bcrypt from 'bcrypt';

interface CustomRequest extends Request {
  AUTH?: any;
}

class AuthController {
  static login(req: CustomRequest, res: Response, next: NextFunction): Response | void {
    // código omitido por brevidade
  }

  static authenticateUser(req: Request, res: Response): Response | void {
    const { email, password } = req.body;

    // Encontre o usuário com o email fornecido no banco de dados
    User.findOne({ email }, (err: Error, user: any) => {
      if (err) {
        return res.status(500).json({ erro: "Erro ao autenticar o usuário." });
      }

      if (!user) {
        return res.status(401).json({ erro: "Usuário não encontrado." });
      }

      // Compare a senha fornecida com a senha armazenada no usuário
      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ erro: "Senha inválida." });
      }

      // Crie um token JWT para o usuário autenticado
      const token = jwt.sign({ userId: user._id }, "locadora_2023");

      // Retorne o token como resposta
      return res.json({ token });
    });
  }
}

export default AuthController;
