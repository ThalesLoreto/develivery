import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../../database/prismaClient';

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute(data: IAuthenticateClient) {
    const { username, password } = data;

    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });
    if (!client) {
      throw new Error('User or password incorrect.');
    }

    const passMatch = await compare(password, client.password);
    if (!passMatch) {
      throw new Error('User or password incorrect.');
    }

    const token = sign({ username }, process.env.TOKEN_SECRET as string, {
      subject: client.id,
      expiresIn: '1d',
    });

    return token;
  }
}
