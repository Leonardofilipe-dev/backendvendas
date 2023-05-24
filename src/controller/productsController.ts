import { Request, Response } from 'express';
import Products from '../models/Products';





class ProductsController {
  async create(req: Request, res: Response) {
    
    const { name, photo, price, description, category } = req.body;
  
    try {
      const existingProduct = await Products.findOne({ name });
      if (existingProduct) {
        return res.status(409).send('Product already exists!');
      }

      const  categoryId  = category

      const newProduct = new Products({
        name,
        photo,
        price,
        description,
        category: categoryId
      })

      await newProduct.save();

      return res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const productId: string = req.params.id;
      const product: typeof Products | null = await Products.findById(productId);
      if (!product) {
        return res.status(404).send('Product not found!');
      }
      res.json(product);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const productId: string = req.params.id;
      const { name, photo, price, description, category }:
      
      { name: string, photo: string, price: number, description: string, category: string } = req.body;

      const updatedProduct: typeof Products | null = await Products.findByIdAndUpdate(
        productId,
        { name, photo, price, description, category},

        { new: true }
      )
      if (!updatedProduct) {
        return res.status(404).send('Product not found!');
      }
      res.json(updatedProduct);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const productId: string = req.params.id;
      const deletedProduct: typeof Products | null = await Products.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).send('Product not found!');
      }
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
}


export default new ProductsController();
