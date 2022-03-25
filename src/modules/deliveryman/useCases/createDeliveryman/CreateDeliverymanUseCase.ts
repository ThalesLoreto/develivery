import { hash } from 'bcryptjs';

import { DeliveryMan } from '@prisma/client';

import { prisma } from '../../../../database/prismaClient';
import { ICreateDeliverymanDTO } from '../../dtos/ICreateDeliverymanDTO';

export class CreateDeliverymanUseCase {
  async execute(data: ICreateDeliverymanDTO): Promise<DeliveryMan> {
    const { username, password } = data;

    const userExists = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });
    if (userExists) {
      throw new Error('Deliveryman already exists');
    }

    const hashPassword = await hash(password, 8);
    const deliveryman = await prisma.deliveryMan.create({
      data: {
        username,
        password: hashPassword,
      },
    });
    return deliveryman;
  }
}
