import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: 'Token missing',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: id } = verify(
      token,
      process.env.TOKEN_SECRET as string,
    ) as IPayload;

    req.user = {
      id,
    };

    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid Token',
    });
  }
}
