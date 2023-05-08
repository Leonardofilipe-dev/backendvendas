import { Request, Response, NextFunction } from "express";
import { Products } from "../models/Products"

const productsController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("Hello, World!")
        } catch (error) {
            next(error)
        }
    },

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("Hello, World!")
        } catch (error) {
            next(error)
        }
    },

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("Hello, World!")
        } catch (error) {
            next(error)
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("Hello, World!")
        } catch (error) {
            next(error)
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("Hello, World!")
        } catch (error) {
            next(error)
        }
    }
}

export default productsController