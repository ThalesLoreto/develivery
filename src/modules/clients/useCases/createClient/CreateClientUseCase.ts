import { hash } from 'bcryptjs';

import { Clients } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { ICreateClientDTO } from '../../dtos/ICreateClientDTO';

export class CreateClientUseCase {
  async execute(data: ICreateClientDTO): Promise<Clients> {
    const { username, password } = data;

    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });
    if (clientExist) {
      throw new Error('Client already exists.');
    }

    const hashPassword = await hash(password, 8);
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
