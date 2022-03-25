import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../../database/prismaClient';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute(data: IAuthenticateDeliveryman): Promise<string> {
    const { username, password } = data;

    const deliveryman = await prisma.deliveryMan.findFirst({
      where: {
        username,
      },
    });
    if (!deliveryman) {
      throw new Error('User or password incorrect.');
    }

    const passMatch = await compare(password, deliveryman.password);
    if (!passMatch) {
      throw new Error('User or password incorrect.');
    }

    const token = sign({ username }, process.env.TOKEN_SECRET as string, {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return token;
  }
}
