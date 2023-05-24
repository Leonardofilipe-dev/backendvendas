import { Request, Response } from 'express';
import Categories from '../models/Categories';

class CategoriesController {

  async create(req: Request, res: Response) {
    try {

      const { name } = req.body;

      const existingCategory = await Categories.findOne({ name });
      if (existingCategory) {
        return res.status(409).send('Category already exists!');
      }

      const categories = new Categories({
        name,
      })
      await categories.save()
      res.status(201).json(categories)
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const categories = await Categories.find();
      res.json(categories);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const categoryId: string = req.params.id;
      const category: Categories | null = await Categories.findById(categoryId);
      if (!category) {
        return res.status(404).send('Category not found!');
      }
      res.json(category);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const categoryId: string = req.params.id;
      const { name }: { name: string } = req.body;

      const updatedCategory: Categories | null = await Categories.findByIdAndUpdate(
        categoryId,
        { name },

        { new: true }
      )
      if (!updatedCategory) {
        return res.status(404).send('Category not found!');
      }
      res.json(updatedCategory);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const categoryId: string = req.params.id;
      const deletedCategory: Categories | null = await Categories.findByIdAndDelete(categoryId);
      if (!deletedCategory) {
        return res.status(404).send('Category not found!');
      }
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
  }


export default new CategoriesController();
