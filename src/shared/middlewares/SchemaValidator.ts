import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const validateBody = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction): void => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};