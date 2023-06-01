import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationResult } from 'joi';

const validateUser = (req: Request, res: Response, next: NextFunction): void => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });

  const { error }: ValidationResult = schema.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

export default validateUser;
