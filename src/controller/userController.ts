import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, senha, password } = req.body;
      const user = new User({
        name,
        email,
        senha,
        password,
      });
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const userId: string = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send('User not found!');
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const userId: string = req.params.id;
      const { name, email, password }: { name: string, email: string, password: string } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, email, password },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).send('User not found!');
      }
      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const userId: string = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).send('User not found!');
      }
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
}

export default new UserController();
